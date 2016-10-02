"use strict"

//////////////////////////////////  REQUIRES  //////////////////////////////////
const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const routes = require("./routes/") // same as ./routes/index.js
const { connect, disconnect } = require("./db/database")

const session = require("express-session")
const RedisStore = require("connect-redis")(session)  //grabbing from line above and adding it here

// USING mLAB DATABASE

const port = process.env.PORT || 3000
app.set("port", port)


//////////////////////////////  SET VIEW ENGINE   //////////////////////////////
app.set("view engine", "pug")


/////////////////////////////////  MIDDLEWARES  /////////////////////////////////
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: false}))

app.use(session({
  store: new RedisStore({
    url: process.env.REDIS_URL || "redis://localhost:6379"
  }),
  secret: "loginrsecretkey"
}))

app.use((req, res, next) => {
  // set app.locals.user to req.session.user - Should reveal "Logged in as" in NAV upon login
  app.locals.user = req.session && req.session.user
  console.log(">>>>> app.locals.user", app.locals.user)
  console.log(">>>>> req.session.user", req.session.user)
  next()
})


////////////////////////////////////  Other  ////////////////////////////////////
if (process.env.Node_ENV !== "production") {
  app.locals.pretty = true
}

// errors & body added to avoid guard statements such as: value = (body && body.name) vs. value = body.name
app.locals.errors = {}
app.locals.body = {}
app.locals.company = "Loginr"


///////////////////////////////////  Routes  ///////////////////////////////////
app.use(routes)

// HTML5 ROUTING HERE IF WANTED


// Custom 404 page
app.use((req, res) =>
  res.render("404")
)


// connect to database an initiate with port defined above
connect()
  .then(() => {
    // change port here (from 3000) to use template literal ${port} in conlog below
    app.listen(port, () => {
      console.log(`~~~Loginr app listening on port~~~\n ${port}`) 
    })
  })
  .catch(console.error)
