const mongoose = require("mongoose");

module.exports = new mongoose.model(
  "User",
  new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  })
);
