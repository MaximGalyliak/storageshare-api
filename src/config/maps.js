var request = require('request');
var key = require('./keys').gMaps

const baseURL = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins='
 

module.exports = {
	getDistances: function (values, cb) {
		let renterAddress = values[0]
		let locationAdresses = values[1]
		let origin = renterAddress.replace(/,/g, '').replace(/ /g, '+');
		let destinations = locationAdresses
			.map((e) => e + '|')
			.toString()
			.replace(/,/g, '')
			.replace(/ /g, '+');
		let distanceMatrixRequest =
			baseURL +
			origin +
			'&destinations=' +
			destinations.substring(0, destinations.length - 1) +
			'&key=' +
			key.access_token_key;

		request(distanceMatrixRequest, (err, response, body) => {
			if (err) {
				throw err;
			} else {

				cb(body);
			}
		});
	},
};

