var express = require('express');
var router = express.Router();
var passport = require('../authentication');

//var { Boxes, Items } = require('../models'); //using db instead for all models..
var db = require('../models');

var thisAuthenticated = function(req, res, next) {
	if (req.isAuthenticated() && req.params.user == req.user.id) return next();
	res.sendStatus(401);
};

var isAuthenticated = function(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.sendStatus(401);
};

router.get('/sizes', (req, res) => {
	db.Sizes.findAll({})
		.then((response) => res.json(response))
		.catch((e) => {
			console.log(e);
		});
});

router.use('/*/:user/', thisAuthenticated);
router.use('/*/', isAuthenticated);

router.get('/box/:user', function(req, res) {
	db.Boxes.findAll({
		where: {
			RenterId: req.params.user,
		},
		include: [
			{
				model: Items,
			},
		],
	}).then((data) => {
		res.json(data);
	});
});

router.post('/box', (req, res) => {
	db.Boxes.create({
		description: 'test',
		fragile: req.body.fragile,
		weight: req.body.weight,
		SizeId: req.body.sizeId,
		RenterId: req.user.id,
	})
		.then((response) => {
			res.status(201).json({ newBoxId: response.dataValues.id });
		})
		.catch((error) => {
			res.sendStatus(500);
		});
});

router.post('/newitems', (req, res) => {

	db.Items.bulkCreate(req.body.items)
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
