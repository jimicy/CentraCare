var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');
var nodemailer = require('nodemailer');
var passport = require('passport');
var User = require('../models/User');
var User = require('../models/User');

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login', {user: req.user});
});

router.post('/', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) return next(err);
    if (!user) {
      return res.redirect('/login');
    }
    req.logIn(user, function(err) {
      if (err) return next(err);
      return res.redirect('/');
    });
  })(req, res, next);
});

module.exports = router;