const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


geocode('Atlanta', (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})

forecast(-84.3902, 33.7491, (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})