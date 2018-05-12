var express = require('express');
var router = express.Router();

var { Boxes, Items } = require('../models');
var db = require('../models');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api/boxes/:user', function(req, res) {
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

router.get('/users/api/sizes', (req, res) => {
  db.Sizes.findAll({}).then(response => {
    res.json(response);
  }).catch(e => {
    console.log(e);
  })

});

router.post('/users/api/box', (req, res) => {
  db.Boxes.create({ description: 'test', items: 'test.test ', fragile: req.body.fragile, weight: req.body.weight, SizeId: req.body.sizeId, RenterId: 1 }).then(response => {
    res.status(201).json({ newBoxId: response.dataValues.id });
  }).catch(error => {
    res.sendStatus(500);
  });
});

module.exports = router;
