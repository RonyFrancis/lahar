var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var ip = require('ip');

// API routes
var message = require('./routes/message');
var bot = require('./routes/bot');

// Client page route
var client = require('./routes/client');

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Local app config
app.locals.title = 'Lahar';
app.locals.version = '0.0.1';
app.locals.url = 'http://' + ip.address();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Public folder setup
app.use(express.static(path.join(__dirname, 'public')));

// API endpoints filename (in /routes)
app.use('/api/message', message);
app.use('/api/bot', bot);

// App landing filename (in /routes)
app.use('/', client);

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
