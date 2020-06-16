require('dotenv').config();

const request = require('postman-request');
const API_KEY = process.env.WEATHER_API_KEY
const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=Woodstock,GA&units=f`
request({ url: url, json: true }, (error, response) => {
    console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`)
    // console.log(`It is currently ${response.body.current.temperature} degrees out. There is a ${response.body.current.precip}% chance of rain.`)

});