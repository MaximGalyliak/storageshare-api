var request = require('request');
var express = require('express');
var router = express.Router();

var { Lenders, Renters, Locations } = require('../models');
var db = require('../models');
var gmaps = require('../config/maps').getDistances()

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
    var getRenter = db.Renters.findById(userID,{ 
        attributes: ['address']  
        }).then((data) => {
            return data
        });


    //pulls the locations from the db
    var getLocations = db.Locations.findAll({
        attributes: ['LenderId', 'address']
    }).then((response) => {
        return response
    });
    

    //pulls all lenders from the db
    var getLenders = db.Lenders.findAll({})
        .then((response) => {
            return response
        })
        .catch((e) => {
            console.log(e);
        });

    //uses bluebird to properly chain the db requests and storethe data for the gmaps api request
    Promise.all([getRenter, getLocations]).then((values) => {
    
        res.json(values);
        //current renter address
        let currentRenterAdddress = values[0].address

        //creates array with all lender addresses
        let possibleMatches = values[1].map(e => e.address)
        // console.log(possibleMatches)
        gmaps.getDistances(([currentRenterAdddress, possibleMatches], res) => {
            console.log(res)
        })
    })
});
    



module.exports = router;