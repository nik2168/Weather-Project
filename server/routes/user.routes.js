const express = require("express");
const router = express.Router();

// controllers
const {
  userLogin,
  logout,
  userProfile,
  updateCities,
} = require("../controllers/user.controller.js");

// middle wares
const {
  verifyLoginBody,
} = require("../middlewares/user.mw.js");
const { isAuthenticate } = require("../middlewares/auth.mw.js");


// User API
// Login/SignUp a existing user or new user
router.post("/login", verifyLoginBody, userLogin);

// after this all routes need authentication that user must be logged in to access these routes ...
router.use(isAuthenticate); // authenticate a user with cookie
router.get("/profile", userProfile);
router.get("/logout", logout);
router.get("/updatecities/:city", updateCities);

module.exports = router;
