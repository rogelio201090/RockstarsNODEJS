var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  if (!req.user) {
    res.render('login', {
      appTitle: 'Rockstars', title: 'Login'
    });
  } else {
    res.redirect('/');
  }
});

module.exports = router;
