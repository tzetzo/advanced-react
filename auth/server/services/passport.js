const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/user");

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"), // JWT location in the request
  secretOrKey: process.env.JWT_SECRET
};

// Create JWT strategy to verify a user with a JWT
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
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
passport.use(jwtLogin);
