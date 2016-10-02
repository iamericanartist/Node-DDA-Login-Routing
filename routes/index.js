"use strict"

const { Router } = require('express')
const router = Router()
// const bcrypt = require("bcrypt")

/////////////////////////////////  USER MODEL  /////////////////////////////////
const User = require('../models/user')


/////////////////////////////////  HOME ROUTE  /////////////////////////////////
router.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render("home")
})


////////////////////////////////  LOGIN ROUTES  ////////////////////////////////
router.get('/login', (req, res) => {
  res.render('login', {page: "Login"})
})


////////////////////////////////  LOGOUT ROUTES  ////////////////////////////////
router.post('/logout', (req, res) => {
  res.render("logout", {page: "Logout"})
})


///////////////////////////////  REGISTER ROUTES  ///////////////////////////////
router.get('/register', (req, res) => {
  res.render("register")
})
router.post('/register', (req, res) => {
  console.log("req.body", req.body)
  User
    .create({ user: req.body.user, pass: req.body.pass })
    // .then(() => res.send("I have no idea."))
    .then(() => res.redirect('/login'))
    .catch(err)
})

module.exports = router
