const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/user");
const LocalStrategy = require("passport-local");

// Create local strategy for login a user
const localLogin = new LocalStrategy({ usernameField: "email" }, async function(
  // password field is auto handled
  email,
  password,
  done
) {
  // Verify this username and password, call 'done' with the user
  // if it is the correct email and password
  // otherwise, call done with false
  try {
    const user = await User.findByCredentials(email, password);
    return done(null, user); // here Passport assigns the user to req.user
  } catch (error) {
    return done(error);
  }
});

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"), // JWT location in the request
  secretOrKey: process.env.JWT_SECRET
};

// Create JWT strategy to verify a user with a JWT
const jwtAuth = new JwtStrategy(jwtOptions, function(payload, done) {
  //Strategy is like a Plugin; callback is run for every request containing JWT
  //payload will have the "sub" & "iat" props used to create the JWT
  // See if the user ID in the payload exists in our DB
  // If it does call "done" with that user
  // otherwise call "done" without a user object
  User.findById(payload._id, function(err, user) {
    if (err) {
      // query error
      return done(err, false);
    }

    if (user) {
      done(null, user);
    } else {
      done(null, false); // no user found
    }
  });
});

// Tell passport to use this strategy
passport.use(jwtAuth);
passport.use(localLogin);
