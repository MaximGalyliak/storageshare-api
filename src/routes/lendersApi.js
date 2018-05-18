var express = require('express');
var router = express.Router();
var passport = require('../authentication');

var { Lenders, Locations, Messages } = require('../models');

var thisAuthenticated = function(req, res, next) {
	if (req.isAuthenticated() && req.user.type === 'lender' && req.params.user == req.user.id) return next();
	res.sendStatus(401);
};

var isAuthenticated = function(req, res, next) {
	if (req.isAuthenticated() && req.user.type === 'lender') return next();
	res.sendStatus(401);
};

router.use('/*/:user/', thisAuthenticated);
router.use('/*/', isAuthenticated);

/* GET all locations for lender */
router.get('/locations/:user', function(req, res, next) {
	Locations.findAll({
		where: {
			LenderId: req.user.id,
		},
	}).then((data) => {
		//console.log(data);
		res.json(data);
	});
});

router.post('/newlocation/:user', function(req, res, next) {
	Locations.create({
		address: req.body.address,
		space_total: req.body.space_total,
		min_box_size: req.body.min_box_size,
		max_box_size: req.body.max_box_size,
		inspected: req.body.inspected,
		LenderId: req.user.id,
	}).then((data) => {
		//console.log(data);
		res.json(data);
	});
});

module.exports = router;
