var express = require('express');
var router = express.Router();
var passport = require('../authentication');

var { Boxes, Items } = require('../models');
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/login',
  passport.authenticate('local'), 
  (req, res) => {
    console.log('here');
    res.json({ id: req.user.id });
  }
);

router.get('/logout', function(req, res) {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
