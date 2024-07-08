const jwt = require("jsonwebtoken");
const { v4 } = require("uuid");
const cloudinary = require("cloudinary");
const { getBase64 } = require("../lib/helper.js");
const Message = require("../models/message.model.js");
const Chat = require("../models/chat.model.js");
const { REFETCH_MESSAGES, LAST_ONLINE, LAST_CHAT_ONLINE } = require("../constants/events.js");
const User = require("../models/user.model.js");
const userSocketIds = new Map(); // will map user id with socketId

const cookieObj = {
  maxAge: 15 * 24 * 60 * 60 * 1000,
  sameSite: "none",
  httpOnly: true,
  secure: true,
};

const sendToken = (res, user, code, message) => {
  const token = jwt.sign({ userid: user.userid }, process.env.secret, {
    expiresIn: 15 * 24 * 60 * 60 * 1000,
  });

  res
    .status(code)
    .cookie("nox_token", token, cookieObj)
    .send({ success: true, message, user });
};


module.exports = {
  sendToken,
  emitEvent,
  uploadFilesToCloudinary,
  userSocketIds,
  updateLastSeen,
};
