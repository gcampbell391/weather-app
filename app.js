require('dotenv').config();

const request = require('postman-request');
const API_KEY = process.env.WEATHER_API_KEY
const weatherURL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=Los%20Angeles&units=f`
request({ url: weatherURL, json: true }, (error, response) => {
    console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`)
    // console.log(`It is currently ${response.body.current.temperature} degrees out. There is a ${response.body.current.precip}% chance of rain.`)

});
const GEOCODE_API_KEY = process.env.GEOCODE_API_KEY
const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${GEOCODE_API_KEY}&limit=1`
request({ url: geocodeURL, json: true }, (error, response) => {
    console.log(response.body.features[0].place_name)
    console.log(`Long: ${response.body.features[0].center[0]}`)
    console.log(`Lat: ${response.body.features[0].center[1]}`)
});
