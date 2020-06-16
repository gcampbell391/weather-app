require('dotenv').config();
const request = require('postman-request');

const forecast = (long, lat, callback) => {
    const API_KEY = process.env.WEATHER_API_KEY
    const weatherURL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${lat},${long}&units=f`
    request({ url: weatherURL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service at the moment..', undefined)
        } else if (response.body.error) {
            callback('Unable to find location.', undefined)
        }
        else {
            callback(undefined, `${response.body.current.weather_descriptions[0]}. The current temp is ${response.body.current.temperature}, but it feels like ${response.body.current.feelslike}. There is a ${response.body.current.precip}% chance of rain.`)
        }
    });
}


module.exports = forecast