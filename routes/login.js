var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  Patient.find(function(err, users){
    if (err) return next(err);
    return res.send(users);
  });
});

router.post('/', function(req, res, next) {
  var newUser = new Patient();

  newUser.name = req.body.name;
  newUser.date = req.body.date;
  newUser.description = req.body.description;

  newUser.save(function(err, savedUser){
    if (err) return next(err);
    return res.send(savedUser);
  });
});

module.exports = router;