var request = require('request');
var key = require('./keys').gMaps

const baseURL = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins='
 

function getDistances(renterAddress, locationAdresses) {
    let origin = renterAddress.replace(/,/g, '').replace(/ /g , '+')
    let destinations = locationAdresses.toString().replace(/,/g , '').replace(/ /g , '+')
    let distanceMatrixRequest = baseURL + origin + '&destinations=' + destinations
    console.log(destinations)

}

module.exports = { getDistances }
