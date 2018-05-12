var express = require('express');
var router = express.Router();

var db = require('../models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

  router.get('/api/sizes', (req, res) => {
    console.log('hereh');
    db.Sizes.findAll({}).then(response => {
      res.json(response);
    }).catch(e => {
      console.log(e);
    })
  
  });
  
  router.post('/api/box', (req, res) => {
    db.Boxes.create({ description: 'test', items: 'test.test ', fragile: req.body.fragile, weight: req.body.weight, SizeId: req.body.sizeId, RenterId: 1 }).then(response => {
      res.status(201).json({ newBoxId: response.dataValues.id });
    }).catch(error => {
      res.sendStatus(500);
    });
  });
});

module.exports = router;
