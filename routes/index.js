"use strict"

const { Router } = require("express")
const router = Router()
// const bcrypt = require("bcrypt")

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


router.post("/register", (req, res) => {
  console.log("req.body", req.body)
  if (req.body.pass === req.body.confirmation) {
    // if pass and confirmation match then create user
    User
      .create({ user: req.body.user, pass: req.body.pass, confirmation: req.body.confirmation})
      .then(() => res.redirect("/login"))
  } else {
    // display message (msg) on the register page
    res.render("register", { msg: "Password and Confimation do not match!"})
  }
})


module.exports = router
