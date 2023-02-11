const mongoose = require("mongoose");

module.exports = new mongoose.model(
  "Article",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    published_date: {
      type: Date,
    },
    updated_date: {
      type: Date,
      default: Date.now,
    },
  })
);
