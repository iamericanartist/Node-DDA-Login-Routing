"use strict"

//////////////////////////////////  REQUIRES  //////////////////////////////////
const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const routes = require("./routes/") // same as ./routes/index.js
const { connect } = require("./db/database")

// const session = require('express-session')
// const RedisStore = require('connect-redis')(session)  //grabbing from line above and adding it here

// USING mLAB DATABASE

const port = process.env.PORT || 3000
app.set("port", port)


//////////////////////////////  SET VIEW ENGINE   //////////////////////////////
app.set("view engine", "pug")


/////////////////////////////////  MIDDLEWARES  /////////////////////////////////
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))


////////////////////////////////////  Other  ////////////////////////////////////
if (process.env.Node_ENV !== 'production') {
  app.locals.pretty = true
  console.log("~~~~~~~~~app.locals.pretty~~~~~~~~~\n", app.locals.pretty)
}

app.locals.company = "Loginr"
console.log("~~~~~~~~~app.locals.company~~~~~~~~\n", app.locals.company)


///////////////////////////////////  Routes  ///////////////////////////////////
app.use(routes)


// connect to database an initiate with port defined above
connect()
  .then(() => {
    // change port here (from 3000) to use template literal ${port} in conlog below
    app.listen(port, () => {
      console.log(`~~~Loginr app listening on port~~~\n ${port}`) 
    })
  })
  .catch(console.error)
