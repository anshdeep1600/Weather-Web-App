const request = require('request')

const forecast = (latitude, longitude, callback) =>{
    const url = 'https://api.darksky.net/forecast/fe2a77905949b236f9d43463c1463830/' + latitude + ',' + longitude + '?units=si&exclude=minutely,hourly,alerts,flags'
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to the internet', undefined)
        }else if(body.error){
            callback('Invalid input coordinates', undefined)
        }else{
            callback(undefined, body.daily.data[0].summary +' It is currently '+ body.currently.temperature + ' degree celsius out there with ' + body.currently.precipProbability + '% probability of rain.')
        }
    })
}
module.exports = forecast