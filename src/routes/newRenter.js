var express = require('express');
var router = express.Router();

var db = require('../models')

// Create new Renter
router.get('/', function (req, res) {
    res.send('form',{title: 'this will be the newrenter form api'})
})

router.post('/api/newrenter/signup', (req, res,) => {
    db.Renters.create(req.body
        // name: req.body.name,
        // email: req.body.email,
        // paypal_id: req.body.paypal,
        // phone: req.body.phone,
        // address: req.body.address,
    ).then(response => {
        res.status(201).render({newRenterId: response.dataValues.id});
    }).catch( error => {
        res.sendStatus(500);
    });
});

module.exports = router;