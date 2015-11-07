////set DEBUG=handle & node .\bin\www

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var mongoose = require("mongoose");
mongoose.connect("mongodb://jimicy:dementia@ds051534.mongolab.com:51534/dementiahack-2015");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Models
var User = require('./models/user.js');
var Patient = require('./models/patient.js');

//routes
var routes = require('./routes/index');
// var users = require('./routes/users');

app.use('/', routes);
// app.use('/users', users);

//User routing---------------------------------------
app.get('/users/', function(req, res, next) {
  console.log("hello word");
  User.find(function(err, users){
    if (err) return next(err);
    return res.send(users);
  });
});

app.get('/users/:user_id', function(req, res, next) {
  var user_id = req.params.user_id;

  User.findById(user_id, function(err, user){
    if (err) return next(err);
    return res.send(user);
  });
});

app.post('/users/', function(req, res, next) {
  var newUser = new User();
  newUser.name = req.body.name;
  newUser.date = req.body.date;
  newUser.description = req.body.description;

  newUser.save(function(err, savedUser){
    if (err) return next(err);
    return res.send(savedUser);
  });
});
//---------------------------------------------------

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;