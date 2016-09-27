"use strict"

const { Router } = require('express')
const bcrypt = require("bcrypt")
const router = Router()

const User = require('../models/user')




////////////////////////////////////  INDEX  ////////////////////////////////////
router.get ("/", (req, res) =>                //this is the route for INDEX "/"
  res.render("index")                         //render this page
)


//////////////////////////////////  REGISTER  //////////////////////////////////
router.get("/register", (req, res) =>         //this is the route for REGISTER "/register"
  res.render("register")                      //render this page
)

router.post("/register",)
router.post("/register", (req, res, err) => {                                       // this is the POST route for CONTACT
  if (req.body.password === req.body.confirmation) {
    User
      .create(req.body)
      .then(() => res.redirect('/'))
      .catch(err)
  } else {
    res.render('register', {error: "Password & password confirmation don't match"})
  }
})


////////////////////////////////////  LOGIN  ////////////////////////////////////
router.get("/login", (req, res) =>            //this is the route for LOGIN "/login"
  res.render("login")                         //render this page
)


