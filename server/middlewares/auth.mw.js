const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const { ErrorHandler } = require("../utils/utility");


const isAuthenticate = (req, res, next) => {
  try {
    const token = req.cookies[process.env.TOKEN_NAME];

    // If there is no token
    if (!token)
      return res
        .status(400)
        .json({ success: false, message: "Please login to access this route" });

    const decode = jwt.verify(token, process.env.secret);
    req.userId = decode._id;

    next();
  } catch (err) {
    res
      .status(400)
      .json({
        success: false,
        message: "error while authenticating the user !",
      });
  }
};



module.exports = { isAuthenticate,};
