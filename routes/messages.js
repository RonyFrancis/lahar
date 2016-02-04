var express = require('express');
var http = require('http');
var router = express.Router();
var net = require('net');

var chatscriptConfig = {
	server: { port: 1024, host: 'localhost', allowHalfOpen: true },
	bot: "HARRY"
};

/* POST a message */
router.post('/', function(req, res) {
    var msg = req.body.message;
    var chatscriptSocket = net.createConnection(chatscriptConfig.server, function(){
        payload = 'guest'+'\x00'+chatscriptConfig.bot+'\x00'+msg+'\x00';
        chatscriptSocket.write(payload, function() {
					console.log('post:', req.body.message);
				});

		    // on receive data from chatscriptSocket
				chatscriptSocket.on('data', function(data) {
					console.log(data.toString());
					chatscriptSocket.end();
					res.end(data.toString());
				});

				// on end from chatscriptSocket
				chatscriptSocket.on('end', function() {
					// console.log('disconnected from server');
				});

				// on error from chatscriptSocket
				chatscriptSocket.on('error', function(err) {
					console.log('error from server ' + err +' '+ chatscriptSocket.address()[1]);
					res.end(err);
				});
    });
});

module.exports = router;
