"use strict"

//////////////////////////////////  REQUIRES  //////////////////////////////////
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const routes = require("./routes/") // same as ./routes/index.js
const session = require('express-session')
const RedisStore = require('connect-redis')(session)  //grabbing from line above and adding it here

// USING mLAB DATABASE
const { connect } = require('./db/database')

// streams - requests coming through as streams, middlewares are in the stream

