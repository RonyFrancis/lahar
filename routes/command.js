var express = require('express');
var http = require('http');
var router = express.Router();
var net = require('net');
var config = require('../config.js');

// Initialize the conversation
router.get('/initialize', function(req, res) {
  var payload = req.connection.remoteAddress + '\x00' +
                config.remote().name + '\x00' +
                '\x00' + '\x00';
  var remoteSocket = net.createConnection(config.remote().server, function() {
      // On receive data from remote
      this.on('data', function(data) {
        console.log(data.toString());
        res.json({'response': data.toString()});
      });
      this.on('close', function(had_error) {
        if (had_error) {
          res.sendStatus(503);
        }
        res.sendStatus(200);
      });
  })
  .on('connect', function() {
    // On remote up, write our payload
    remoteSocket.write(payload, function() {
    });
  })
  .on('end', function() {
    // On socket end
  })
  .on("error", function(err) {
    // On remote down
    res.sendStatus(503);
  });
});

// Reset the conversation
router.post('/reset', function(req, res) {
  var payload = req.connection.remoteAddress + '\x00' +
                config.remote().name + '\x00' +
                ':reset' + '\x00';
  var remoteSocket = net.createConnection(config.remote().server, function() {
      // On receive data from remote
      this.on('data', function(data) {
        console.log(data.toString());
        res.json({'response': data.toString()});
      });
      this.on('close', function(had_error) {
        if (had_error) {
          res.sendStatus(503);
        }
        res.sendStatus(200);
      });
  })
  .on('connect', function() {
    // On remote up, write our payload
    remoteSocket.write(payload, function() {
    });
  })
  .on('end', function() {
    // On socket end
  })
  .on("error", function(err) {
    // On remote down
    res.sendStatus(503);
  });
});

module.exports = router;
