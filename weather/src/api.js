var _ = require('lodash')
var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=201fc6647a7aae6453205c465d95e4e4'

var kelvinToF = function (kelvin) {
    return Math.round((kelvin - 273.15) * 1.8 + 32) + '°F'
}

var convertCelcius = function (celcius) {
    return Math.round((celcius - 273.15)) + '°C'
}

module.exports = function (latitude, longitude) {
    var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;
    console.log(url);
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            return {
                city: json.name,
                temperature: convertCelcius(json.main.temp),
                description: _.capitalize(json.weather[0].description)
            }
        })
        .catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });
}