"use strict"

const mongoose = require("mongoose")

// ... || String: "database"://localhost:"mongodPort"/"databaseName"
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/loginr"

mongoose.Promise = Promise

module.exports.connect = () => mongoose.connect(MONGODB_URL)
module.exports.disconnect = () => mongoose.disconnect()
