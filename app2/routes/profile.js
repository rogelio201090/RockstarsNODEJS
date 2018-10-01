var express = require('express');
var router = express.Router();

/* GET own profile. */
router.get('/', function(req, res, next) {
  if(req.user) {
    res.render('profile', {
      appTitle: 'Rockstars',
      title: 'Profile',
      user: req.user});
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
