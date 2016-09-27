"use strict"

const { Router } = require('express')
const router = Router()
// const bcrypt = require("bcrypt")

const User = require('../models/user')



router.get('/', function (req, res) {
  // res.send('Hello World!')
  res.render("home")
})


router.get('/login', function (req, res) {
  res.render("login")
})


router.get('/register', function (req, res) {
  res.render("register")
})
router.post('/register', function (req, res) {
  console.log("req.body", req.body)
  User
    .create({ user: req.body.user, pass: req.body.pass })
    .then(() => res.send("I have no idea."))
})

module.exports = router
