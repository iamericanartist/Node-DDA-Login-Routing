"use strict"

const mongoose = require("mongoose")

module.exports = mongoose.model("User", {
  user: {
    type: String,
    lowercase: true,
    required: true,
    index: {
      unique: true,
    }
  },
  pass: {
    type: String,
    required: true,
  }
})
