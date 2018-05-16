var request = require('request');
var express = require('express');
var router = express.Router();


var { Lenders, Renters, Locations } = require('../models');
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
    db.Renters.findById(req.params.user,
    { 
        attributes: ['address']  
    }).then((data) => {
        console.log(data);
    });  
});

router.get('/findspace/:user', (req, res) => {
    
    let userID = req.params.user;
    let allLenders = null;
    let currentRenter = null;
    let allLocations = null;

    //pulls the current renter/user data from the db
    function getRenter() {
        db.Renters.findById(req.params.user,
        { 
        attributes: ['address']  
        }).then((data) => {
            console.log(data);
        });
    }

    //pulls the locations from the db
    function getLocations() {
        db.Locations.findAll({
            attributes: ['LenderId', 'address']
        })
    }

    //pulls all lenders from the db
    function getLenders() {
        db.Lenders.findAll({})
            .then((response) => {
                console.log(response)
                allLenders = response
            })
            .catch((e) => {
                console.log(e);
            });
    }        
    getLocations()

    //uses bluebird to properly chain the db requests and storethe data for the gmaps api request
    process.on("promiseChained", function(getLocations, getRenter){
        allLocations = event.details.promise;
        currentRenter = event.details.child;
        console.log(allLocations)    
        console.log(currentRenter)    
    });
        
})



module.exports = router;