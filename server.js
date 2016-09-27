"use strict"

//////////////////////////////////  REQUIRES  //////////////////////////////////
const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const routes = require("./routes/") // same as ./routes/index.js
const { connect } = require("./db/database")

// const session = require('express-session')
// const RedisStore = require('connect-redis')(session)  //grabbing from line above and adding it here

// USING PASSPORT AUTH
// const passport = require("passport")
// USING mLAB DATABASE

const port = process.env.PORT || 3000
app.set("port", port)

app.set("view engine", "pug")
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

///////////////////////////////////  Other  ///////////////////////////////////
app.locals.company = "Loginr"

app.use(routes)


connect()
.then(() => {
  app.listen(3000, function () {
    console.log('Loginr app listening on port', port);
  })
})
