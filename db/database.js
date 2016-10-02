"use strict"

const mongoose = require("mongoose")

// // Prior to MLAB setup
// // ... || String: "database"://localhost:"mongodPort"/"databaseName"
// const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/loginr"

// // MLAB SETUP
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://stipmy:itslogitslog@ds139655.mlab.com:39655/loginrdatabase"

mongoose.Promise = Promise

module.exports.connect = () => mongoose.connect(MONGODB_URL)
module.exports.disconnect = () => mongoose.disconnect()
