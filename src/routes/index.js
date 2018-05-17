var express = require('express');
var router = express.Router();
var passport = require('../authentication');

var { Boxes, Items, Renters } = require('../models');
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.post('/login', passport.authenticate('renters'), (req, res) => {
	res.json({ id: req.user.id });
});

router.get('/logout', function(req, res) {
	req.logout();
	res.sendStatus(200);
});

router.post('/newrenter', (req, res, next) => {
	db.Renters.create({
		name: req.body.name,
		email: req.body.email,
		paypal_id: req.body.paypal,
		phone: req.body.phone,
		address: req.body.address,
		password: req.body.password,
	})
		.then((response) => {
			return next();
		})
		.catch((error) => {
			res.status(400).json({ error: error.get('email')[0].message });
		});
}, passport.authenticate('renters'), (req, res) => {
	res.status(201).json({ newRenterId: req.user.id });
});

module.exports = router;
