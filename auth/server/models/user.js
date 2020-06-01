const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Define our schema
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true }, //thanks to lowercase tzetzo@yahoo.com & TZETZO@yahoo.com are counted as the same e-mail!
  password: String
});

//define custom instance method for JWT creation; cant be arrow function!
//accessed directly through user.generateAuthToken()
//SignUp & SignIn user endpoints use it
userSchema.methods.generateAuthToken = async function() {
  const user = this;
  //create the JWT:
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET); //{expiresIn: '7 days'} as third parameter
  //add the JWT to the user tokens field
  // user.tokens = user.tokens.concat({ token });
  //save the user with the new token to DB:
  // await user.save();
  return token;
};

// On Save Hook, encrypt password
// Before saving a model, run this function
userSchema.pre("save", async function(next) {
  const user = this; //this refers to individual document

  if (user.isModified("password")) {
    //fired when user is created & when password is changed
    user.password = await bcrypt.hash(user.password, 8);
  }

  next(); // saves the model
});

// Create the model class
const ModelClass = mongoose.model("user", userSchema); // collection "users" will be created

// Export the model
module.exports = ModelClass;
