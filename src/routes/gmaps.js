var request = require('request');
var express = require('express');
var router = express.Router();


var { Lenders, Renters } = require('../models');
var db = require('../models');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/lenders', (req,res) => {
    db.Lenders.findAll({})
        .then((response) => console.log(response))
        .catch((e) => {
            console.log(e);
        });
})

router.get('/renter/:user', (req, res) => {
    db.Renters.findAll({
        where: {
            id: req.params.user  
        }
    }).then((data) => {
        console.log(data);
    });  
});

router.get('/distanceCalc', (req, res) => {

})

module.exports = router;