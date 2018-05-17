var express = require('express');
var router = express.Router();
var passport = require('../authentication');

var { Boxes, Renters, Locations, Messages } = require('../models');

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

router.get('/renter/:user', (req, res) => {
	Messages.findAll({
		include: [
			{
				model: Boxes,
				where: { RenterId: req.params.user },
				include: [{ model: Renters }],
			},
			{
				model: Locations,
				// include: [{ model: Lenders }],
			},
		],
	})
		.then((response) => {
			console.log(response);
			res.json(response);
		})
		.catch((e) => {
			console.log(e);
		});
});

router.get('/lender/:user', (req, res) => {
	Messages.findAll({
		include: [
			{
				model: Boxes,
			},
			{
				model: Renters,
				where: { id: Boxes.RenterId },
			},
			{
				model: Locations,
				where: { LenderId: req.user.id },
			},
		],
	})
		.then((response) => res.json(response))
		.catch((e) => {
			console.log(e);
		});
});

module.exports = router;
