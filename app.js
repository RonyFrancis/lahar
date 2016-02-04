var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// API routes
var messages = require('./routes/messages');

// Client route
var client = require('./routes/client');

// Boom
var app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Local app config
app.locals.title = 'ambar';
app.locals.version = '0.0.1';
app.locals.email = 'hello@samuelcousin.com';
app.locals.url = 'http://localhost:4000';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

// API endpoints
app.use('/api/messages', messages);

// App landing
app.use('/', client);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
