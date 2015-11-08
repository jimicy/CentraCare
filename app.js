////set DEBUG=handle & node .\bin\www

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var session = require('express-session');
var nodemailer = require('nodemailer');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var async = require('async');
var crypto = require('crypto');

var mongoose = require("mongoose");
mongoose.connect("mongodb://jimicy:dementia@ds051534.mongolab.com:51534/dementiahack-2015");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Middleware
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({ secret: 'dementiahack-2015' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

//authentication. Passport
passport.use(new LocalStrategy(function(email, password, done) {
  User.findOne({ email: email }, function(err, user) {
    if (err) return done(err);
    if (!user) return done(null, false, { message: 'Incorrect email.' });
    user.comparePassword(password, function(err, isMatch) {
      if (isMatch) {
        console.log(user);
        return done(null, user);
      } else {
        return done(null, false, { message: 'Incorrect password.' });
      }
    });
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

//Send mail----------------------------------------------------
// Create a SMTP transporter object
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'jimmyw22@gmail.com',
        pass: 'nsyejjixljlmyiik'
    }
});

// Message object
var message = {

    // sender info
    from: 'Sender Name <sender@example.com>',

    // Comma separated list of recipients
    to: '"Receiver Name" <wang638@mcmaster.ca>',

    // Subject of the message
    subject: 'Patient Care Info', //

    headers: {
        'X-Laziness-level': 1000
    },

    // plaintext body
    text: 'Hello to myself!',

    // HTML body
    html: '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
        '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>',

    // Apple Watch specific HTML body
    watchHtml: '<b>Hello</b> to myself',

    // An array of attachments
    attachments: [

        // String attachment
        {
            filename: 'notes.txt',
            content: 'Some notes about this e-mail',
            contentType: 'text/plain' // optional, would be detected from the filename
        },

        // Binary Buffer attachment
        {
            filename: 'image.png',
            content: new Buffer('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
                '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
                'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC', 'base64'),

            cid: 'note@example.com' // should be as unique as possible
        },

        // File Stream attachment
        {
            filename: 'nyan cat ✔.gif',
            path: __dirname + '/assets/nyan.gif',
            cid: 'nyan@example.com' // should be as unique as possible
        }
    ]
};
//---------------------------------------------------


var loggedInUser;

//Models
var User = require('./models/User');
var Patient = require('./models/Patient');

//Routing
// var routes = require('./routes/index');
var users = require('./routes/users');
// var patients = require('./routes/patients');
// var login = require('./routes/login');

// app.use('/', routes);
app.use('/users', users);
// app.use('/patients', patients);
// app.use('/login', login);

app.get('/', function(req, res, next) {
  console.log(loggedInUser);

  if (loggedInUser) {
    res.render('app', {user: loggedInUser});
  }
  else {
    res.render('index', {user: loggedInUser});
  }
  // res.render('index', {user: req.user});
});

app.get('/login', function(req, res) {
  res.render('login', {user: loggedInUser});
  // res.render('login', {user: req.user});
});

app.post('/login', function(req, res, next) {
  User.find({email: "jimmyw22@gmail.com"}, function(err,doc){
    loggedInUser = doc[0];
    res.redirect('/');
  });

/*  passport.authenticate('local', function(err, user, info) {
    if (err) return next(err);
    if (!user) {
      return res.redirect('/login');
    }
    req.logIn(user, function(err) {
      if (err) return next(err);
      return res.redirect('/');
    });
  })(req, res, next);*/
});

app.get('/signup', function(req, res) {
  res.render('signup', {
    user: req.user
  });
});

app.post('/signup', function(req, res) {
  var patient_permissions = [];
  for (var patientName of req.body.patients.split(',')){
    var newPatient = new Patient({
      name: patientName
    });

    newPatient.save(function(err) {});

    patient_permissions.push({patient_id: newPatient.id, editable: true, viewable: true});
  }

  var user = new User({
      email: req.body.email,
      password: req.body.password,
      patient_permissions: patient_permissions
  });

  loggedInUser = user;

  user.save(function(err) {
    req.logIn(user, function(err) {
      res.redirect('/');
    });
  });
});

app.get('/logout', function(req, res){
  loggedInUser = null;
  req.logout();
  res.redirect('/');
});

app.get('/app', function(req, res){
  res.render('app');
});
app.post('/app', function(req, res){
  Patient.findById(loggedInUser.patient_permissions[0].patient_id, function(err, patient) {
    console.log(JSON.parse(keys(req.body)));
    // patient.form.profile.push(req.body[])
  });
});

app.post('/mail', function(req, res){
  console.log(req.body);
  message.to = req.body['sendTo[]'];
  message.text = req.body.body;
  message.html = req.body.body;
  transporter.sendMail(message, function(error, info) {
    if (error) {
        console.log('Error occurred');
        console.log(error.message);
        return;
    }
    res.end('{"success" : "Updated Successfully", "status" : 200}');
  });
});

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