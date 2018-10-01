var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { appTitle: 'Rockstars', title: 'Otro título'});
});

module.exports = router;
