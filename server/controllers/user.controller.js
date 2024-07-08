const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const cookieObj = {
  maxAge: 15 * 24 * 60 * 60 * 1000,
  sameSite: "none",
  httpOnly: true,
  secure: true,
};

// SIGN UP :
const createUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = await User.create({
      username,
      password,
      cities: ["delhi"],
    });

    // generate a new jwt token
    const token = jwt.sign({ _id: newUser._id }, process.env.secret);

    // If everything is fine then send the jwt token in cookie
    return res
      .status(201)
      .cookie(process.env.TOKEN_NAME, token, cookieObj)
      .json({ success: true, message: "User Created!", user: newUser });
  } catch (err) {
    if (err.code === 11000) {
      const error = Object.keys(err.keyPattern).join(",");
      return res
        .status(400)
        .json({ success: false, message: `Duplicate field ${error}` });
    }
    return res
      .status(500)
      .json({
        success: false,
        message: "error while trying to signup",
        err: err,
      });
  }
};

// LOG IN :
const userLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    // check if user is present
    const checkUser = await User.findOne({ username: username }).select(
      "+password"
    );
    if (!checkUser) {
      const newUser = await User.create({
        username,
        password,
        cities: ["delhi"],
      });

      // generate a new jwt token
      const token = jwt.sign({ _id: newUser._id }, process.env.secret);

      // If everything is fine then send the jwt token in cookie
      console.log("new user created !");
      return res
        .status(201)
        .cookie(process.env.TOKEN_NAME, token, cookieObj)
        .json({ success: true, message: "New User Created!", user: newUser });
    }

    // check if the password is correct
    const checkPassword = await bcrypt.compare(password, checkUser.password);
    if (!checkPassword)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect password!" });

    // generate a new jwt token
    const token = jwt.sign({ _id: checkUser._id }, process.env.secret);

    // If everything is fine then send the jwt token in cookie

    return res
      .status(200)
      .cookie(process.env.TOKEN_NAME, token, cookieObj)
      .json({ success: true, message: "Login Successfully!", user: checkUser });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error while signing the user", des: err });
  }
};

// user Profile
const userProfile = async (req, res) => {
  try {
    const getUser = await User.findById(req.userId).select("-password"); // default

    if (!getUser)
      return res.status(400).json({ success: true, message: "User not exist" });

    res.status(200).json({
      success: true,
      user: getUser,
    });
  } catch (err) {
    res.status(500).json({
      success: true,
      message: "Error while fetching user profile",
      err,
    });
  }
};

// logout
const logout = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie(process.env.TOKEN_NAME, "", { ...cookieObj, maxAge: 0 }) // remove the cookie from user to logout by sending a new empty cookie with age zero.
      .json({
        success: true,
        message: "log out successfully !",
      });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "error while we trying to logout" });
  }
};

// add a city
const updateCities = async (req, res) => {
  const city = req.params.city;

  try {
    const user = await User.findById({ _id: req.userId.toString() });
    let status = "";

    if (user.cities.includes(city.toString().toLowerCase())) {
      status = "removed";
      user.cities.map((i, idx) => {
        if (i === city.toString().toLowerCase()) {
          user.cities.splice(idx, 1);
        }
      });
    } else {
      status = "added";
      user.cities.push(city.toString().toLowerCase());
    }

    await user.save();
    return res
      .status(200)
      .json({ success: true, message: `city ${city} ${status}` });
  } catch (err) {
    if (err.name === "CastError") {
      const path = err.path;
      err.message = `Invalid format of ${path}`;

      return res.status(400).json({
        success: false,
        message: process.env.NODE_ENV === "DEVELOPMENT" ? err : err.message,
      });
    }

    return res.status(400).json({
      success: false,
      message: "Error while searching the user: ",
      err,
    });
  }
};

module.exports = {
  userLogin,
  logout,
  userProfile,
  updateCities,
};
