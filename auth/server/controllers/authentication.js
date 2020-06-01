const User = require("../models/user");

module.exports.signup = async function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide email and password" });
  }

  try {
    // See if a user with a given email exists
    const existingUser = await User.findOne({ email });

    // If a user with email does exist return an error
    if (existingUser) {
      return res.status(422).send({ error: "Email is in use" });
    }

    // If a user with email does NOT exist, create and save user record
    const user = new User({
      email,
      password
    });

    await user.save();

    const token = await user.generateAuthToken();
    // Respond to a request indicating the user was created
    res.json({ token: token });
  } catch (error) {
    res.status(400).send(error); //https://httpstatuses.com; also inform the user he made a bad request(wrong password format etc)
  }
};

module.exports.signin = async function(req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  try{
    const token = await req.user.generateAuthToken();
    res.send({token})
  } catch (error) {
    res.status(400).send(error);
  }
};
