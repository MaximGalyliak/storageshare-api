var express = require('express');
var router = express.Router();
var passport = require('../authentication');

var { Boxes, Items, Renters } = require('../models');
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

router.post('/newrenter', (req, res) => {
  console.log('you hit me')
	db.Renters.create({
		name: req.body.name,
		email: req.body.email,
		paypal_id: req.body.paypal,
		phone: req.body.phone,
		address: req.body.address,
	})
		.then((response) => {
			res.status(201).render({ newRenterId: response.dataValues.id });
		})
		.catch((error) => {
			res.sendStatus(500);
		});
});

module.exports = router;
