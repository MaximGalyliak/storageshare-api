var express = require('express');
var router = express.Router();
var passport = require('../authentication');

var { Lenders } = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.post('/login', passport.authenticate('lenders'), (req, res) => {
	res.json({ id: req.user.id });
});

router.get('/logout', function(req, res) {
	req.logout();
	res.sendStatus(200);
});

router.post('/newlender', (req, res) => {
	Lenders.create({
		name: req.body.name,
		email: req.body.email,
		background_check: req.body.background_check,
		phone: req.body.phone,
		address: req.body.address,
		password: req.body.password,
	})
		.then((response) => {
			res.status(201).json({ newLenderId: response.dataValues.id });
		})
		.catch((error) => {
			res.status(400).json({ error: error.get('email')[0].message });
		});
});

module.exports = router;
