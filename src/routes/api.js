var express = require('express');
var router = express.Router();
var passport = require('../authentication');

var { Boxes, Items } = require('../models');
var db = require('../models');

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated() && req.params.user == req.user.id)
    return next();
  res.sendStatus(401);
}

router.get('/sizes', (req, res) => {
  db.Sizes.findAll({}).then(response => {
    res.json(response);
  }).catch(e => {
    console.log(e);
  })
});

router.use('/*/:user/', isAuthenticated);

router.get('/box/:user', function(req, res) {
  Boxes.findAll({
    where: {
      RenterId: req.params.user
    },
    include: [{
      model: Items,
    }]
  }).then(data => {
    res.json(data);
  });
});


router.post('/box', (req, res) => {
  db.Boxes.create({ description: 'test', items: 'test.test ', fragile: req.body.fragile, weight: req.body.weight, SizeId: req.body.sizeId, RenterId: 1 }).then(response => {
    res.status(201).json({ newBoxId: response.dataValues.id });
  }).catch(error => {
    res.sendStatus(500);
  });
});

router.post('/newrenter/signup', (req, res) => {
  db.Renters.create({
    name: req.body.name,
    email: req.body.email,
    paypal_id: req.body.paypal,
    phone: req.body.phone,
    address: req.body.address,
  }).then(response => {
    res.status(201).render({ newRenterId: response.dataValues.id });
  }).catch(error => {
    res.sendStatus(500);
  });
});

module.exports = router;