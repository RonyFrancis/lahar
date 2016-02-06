var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var ip = require('ip');
var config = require('./config.js');

// Local app config
app.locals = {
  title : 'Lahar',
  version : '0.0.1',
  url : 'http://' + ip.address(),
  server : {
    host : config.remote().server.host,
    port : config.remote().server.port,
    name : config.remote().name
  }
};

// Routes
var client = require('./routes/client'); // Client page route

var message = require('./routes/message');
var command = require('./routes/command');

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Public folder setup
app.use(express.static(path.join(__dirname, 'public')));

// Attach views
app.use('/', client); // Client page view

app.use('/api/message', message);
app.use('/api/command', command);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler development (will print stacktrace)
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Production error handler (no stacktraces leaked to user)
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
