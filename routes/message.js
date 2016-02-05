var express = require('express');
var http = require('http');
var router = express.Router();
var net = require('net');
var config = require('../config.js');

// Listen to all POST requests to the relative path / (in this case https://your.server/api/messages)
// Send the message to the CS server & send back the answer to the client
router.post('/', function(req, res) {
  var msg = req.body.message || ' ';
  var payload = req.connection.remoteAddress + '\x00' +
                config.remote().bot + '\x00' +
                msg + '\x00';
  var remoteSocket = net.createConnection(config.remote().server, function() {
      // On receive data from remote
      this.on('data', function(data) {
        console.log(data.toString());
        res.send(data.toString());
      });
      this.on('close', function(had_error) {
        if (had_error) {
          console.log('close + error');
          res.sendStatus(503);
        }
        console.log('close + 200');
        res.sendStatus(200);
      });
  })
  .on('connect', function() {
    // On remote up, write our payload
    remoteSocket.write(payload, function() {
    });
  })
  .on('end', function() {
    // console.log('end');
  })
  .on("error", function(err) {
    // On remote down
    console.log(err);
    res.sendStatus(503);
  });
});

module.exports = router;
