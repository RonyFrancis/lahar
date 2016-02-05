var express = require('express');
var router = express.Router();

// Respond to all GET request sent to / with the 'client' file located in views/. Also passes along the req.locals properties. To disable this, comment out the 'res.render' & de-comment the 'res.send'
router.get('/', function(req, res, next) {
  // res.sendStatus(200)
  res.render('client', req.locals);
});

module.exports = router;
