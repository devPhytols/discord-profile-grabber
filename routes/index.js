var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Discord Profile Grabber', youAreUsingJade: true });
});


module.exports = router;
