var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var User = require('../models/User');

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  User.find(function(err, users){
    if (err) return next(err);
    return res.send(users);
  });
});

router.get('/:user_id', function(req, res, next) {
  var user_id = req.params.user_id;

  User.findById(user_id, function(err, user){
    if (err) return next(err);
    return res.json(user);
  });
});

router.put('/', function(req, res, next) {
  var newUser = new User();

  if (!User.find()) {
    newUser.email = "jimmyw22@gmail.com";
    newUser.password = "hackitmac";
    newUser.patient_permissions = [{email: "wang638@mcmaster.ca", editable: true, viewable: true},
                                   {email: "test@mcmaster.ca", editable: true, viewable: true}];
    newUser.profile_image = "https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg";
  }

  newUser.save(function(err, savedUser){
    if (err) return next(err);
    return res.send(savedUser);
  });
});

module.exports = router;