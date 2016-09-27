"use strict"

const mongoose = require("mongoose")

module.exports = mongoose.model("User", {
  email: {
    type: String,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
})
