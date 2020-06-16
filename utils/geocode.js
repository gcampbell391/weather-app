require('dotenv').config();
const request = require('postman-request');

const geocode = (address, callback) => {
    const GEOCODE_API_KEY = process.env.GEOCODE_API_KEY
    const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${GEOCODE_API_KEY}&limit=1`
    request({ url: geocodeURL, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to location services...Please check your connection and try again.", undefined)
        } else if (response.body.message === 'Not Found') {
            callback("Unable to find location. Please try again.", undefined)
        }
        else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            }
            )
        }
    });
}

module.exports = geocode