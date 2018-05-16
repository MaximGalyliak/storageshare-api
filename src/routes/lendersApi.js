var express = require('express');
var router = express.Router();
var passport = require('../authentication');

var { Lenders, Locations, Messages } = require('../models');

var thisAuthenticated = function(req, res, next) {
	if (req.isAuthenticated() && req.params.user == req.user.id) return next();
	res.sendStatus(401);
};

var isAuthenticated = function(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.sendStatus(401);
};

router.use('/*/:user/', thisAuthenticated);
router.use('/*/', isAuthenticated);

/* GET all items for Renter */
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

module.exports = router;
