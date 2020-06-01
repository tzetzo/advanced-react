const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define our schema
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true }, //thanks to lowercase tzetzo@yahoo.com & TZETZO@yahoo.com are counted as the same e-mail!
  password: String
});

// Create the model class
const ModelClass = mongoose.model("user", userSchema); // collection "user" will be created

// Export the model
module.exports = ModelClass;
