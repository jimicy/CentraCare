var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log("test");
  res.render('index', {data: ["alic", "Jimmy"]});
});

module.exports = router;
