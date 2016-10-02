"use strict"

const { Router } = require("express")
const router = Router()
const bcrypt = require("bcrypt")

/////////////////////////////////  USER MODEL  /////////////////////////////////
const User = require("../models/user")


/////////////////////////////////  HOME ROUTE  /////////////////////////////////
router.get("/", (req, res) => {
  console.log("HOME/INDEX VIEW")
  res.render("home")
})


////////////////////////////////  LOGIN ROUTES  ////////////////////////////////
router.get("/login", (req, res) => {
  console.log("LOGIN VIEW")
  res.render("login", {page: "Login"})
})


////////////////////////////////  LOGOUT ROUTES  ////////////////////////////////
router.post("/logout", (req, res) => {
  res.render("logout", {page: "Logout"})
})


///////////////////////////////  REGISTER ROUTES  ///////////////////////////////
router.get("/register", (req, res) => {
  console.log("REGISTER VIEW")
  res.render("register", {page: "Register"})
})

//DECONSTRUCT:
router.post("/register", ({ body: {user, pass, confirmation} }, res, err) => {
  console.log(`DESTRUCTED req.body\n ${user}\n ${pass}\n ${confirmation}`)
  if (pass === confirmation) {
    // if pass and confirmation match then create user
    return new Promise((resolve, reject) => {
      // running as Promise assures everything resolves BEFORE creation of User
      bcrypt.hash(pass, 10, (err, hash) => {
        if (err) {
          reject(err)
        } else {
          resolve(hash)
        }
      })
    })
    // needs to be an object to work here with the hash ( hash => User.create({"req.body stuff"}) )
    .then(hash => User.create({ user, pass: hash}))
      .then(() => res.redirect("/login"))
      .catch(err)
  } else {
    // display message (msg) on the register page
    res.render("register", { msg: "Password and Confimation do not match!"})
  }
})

module.exports = router
