var express = require('express');
var router = express.Router();
var passport = require('../authentication');

var { Boxes, Items, Renters, Sizes, Locations } = require('../models');

var thisAuthenticated = function(req, res, next) {
	if (req.isAuthenticated() && req.params.user == req.user.id) return next();
	res.sendStatus(401);
};

var isAuthenticated = function(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.sendStatus(401);
};

router.get('/sizes', (req, res) => {
	Sizes.findAll({})
		.then((response) => res.json(response))
		.catch((e) => {
			console.log(e);
		});
});

router.use('/*/:user/', thisAuthenticated);
router.use('/*/', isAuthenticated);

/* GET all items for Renter */
router.get('/items/:user', function(req, res, next) {
	Items.findAll({
		include: {
			model: Boxes,
			where: {
				RenterId: req.params.user,
			},
			include: { model: Locations }
		},
	}).then((data) => {
		//console.log(data);
		res.json(data);
	});
});

router.get('/box/:user', function(req, res) {
	Boxes.findAll({
		where: {
			RenterId: req.params.user,
		},
		include: [
			{model: Items},
			{model: Locations},
		],
	}).then((data) => {
		res.json(data);
	});
});

router.post('/box', (req, res) => {
	Boxes.create({
		description: req.body.description,
		fragile: req.body.fragile,
		weight: req.body.weight,
		SizeId: req.body.SizeId,
		RenterId: req.user.id,
		status: req.body.status,
	})
		.then((response) => {
			res.status(201).json({ newBoxId: response.dataValues.id });
		})
		.catch((error) => {
			res.sendStatus(500);
		});
});

router.post('/newitems', (req, res) => {
	Items.bulkCreate(req.body.items)
		.then((items) => {
			let itemIds = [];

			items.forEach((item) => {
				itemIds.push({ id: item.dataValues.id });
			});
			res.status(201).json({ newItemIds: itemIds });
		})
		.catch((err) => {
			res.sendStatus(500);
		});
});

module.exports = router;
