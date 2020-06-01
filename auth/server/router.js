const Authentication = require("./controllers/authentication");
const passportService = require("./services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false }); //"session: false" means to not use Cookies; uses the jwtAuth Strategy from /services/passport.js
const requireSignin = passport.authenticate("local", { session: false }); //uses the localLogin Strategy from /services/passport.js

module.exports = function(app) {
  app.get("/", requireAuth, (req, res) => { //authenticated user only route
    res.send({ hi: "there" });
  });

  app.post("/signin", requireSignin, Authentication.signin);

  app.post("/signup", Authentication.signup);
};
