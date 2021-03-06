var request = require('request');
var express = require('express');
var router = express.Router();

var { Lenders, Renters, Locations } = require('../models');
var db = require('../models');
var gmaps = require('../config/maps').getDistances

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
    
    //function for compare location values
        function distCompare(a, b) {
        if (a.distance.value < b.distance.value)
            return -1;
        if (a.distance.value > b.distance.value);
            return 1;
        return 0;
    }    
        

    //chain the db requests and store the data for the gmaps api request
    Promise.all([getRenter, getLocations]).then((values) => {
    
        //current renter address
        let currentRenterAdddress = values[0].address

        //creates array with all lender addresses
        let possibleMatches = values[1].map(e => e.address)
        //sorts the distance of the locations and adds the addresses and location id.
        var calcDistances = gmaps([currentRenterAdddress, possibleMatches], (results) => {
            
            let data = JSON.parse(results)
            //isolates the distance results from the maps response
            let info = data.rows[0].elements
            //appends the location id to the maps data prior to sorting. the data is returned in the order it was give which is by id.
            info.map((e) => {
                e['location_id'] = info.indexOf(e)
            })
            //sort responses by distance (value is the distance in meters between the renter and the locations)
            let top3 = info.sort(distCompare).slice(0, 3)
            //add address data to top3 array
            top3.map((e) => {
                e['location_address'] = data.destination_addresses[e.location_id]
            })
            res.json(top3);
            
            
        });
    });
});
    



module.exports = router;