var express = require('express');
var router = express.Router();

// Respond to all GET request sent to / with 'client' located in views/. Also passes along the req.locals properties. To disable this page, comment out the 'res.render' & de-comment the 'res.send'
router.get('/', function(req, res) {
  // res.sendStatus(200)
  res.render('client', req.locals);
});

module.exports = router;
