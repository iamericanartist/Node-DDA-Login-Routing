"use strict"

//////////////////////////////////  REQUIRES  //////////////////////////////////
const express = require("express")
const app = express()
// const bodyParser = require("body-parser")
// const routes = require("./routes/") // same as ./routes/index.js

// const session = require('express-session')
// const RedisStore = require('connect-redis')(session)  //grabbing from line above and adding it here

// USING PASSPORT AUTH
// const passport = require("passport")
// USING mLAB DATABASE
// const { connect } = require('./db/database')

const port = process.env.PORT || 3000
app.set("port", port)

app.set("view engine", "pug")
app.use(express.static('public'))

///////////////////////////////////  Other  ///////////////////////////////////
app.locals.company = "Loginr"

app.get('/', function (req, res) {
  // res.send('Hello World!');
  res.render("home")
});
app.get('/login', function (req, res) {
  res.render("login")
});
app.get('/register', function (req, res) {
  res.render("register")
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
