const path = require('path');
const express = require('express');
const geocode = require('./geocode');
const forecast = require('./forecast')


const app = express();


const publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory))

app.get('/weather', function (req, res) {
    if (!req.query.address) {
        res.send('Please pick an address')
    } else {
        geocode(req.query.address, (error, response ) => {
            if (error) {
                return console.log(error)
            }
    
            forecast(response.latitude, response.longitude, (error, forecastData) => {
                if (error) {
                    return console.log(error)
                }
                
                res.send({forecast: forecastData,
                    location: response.location,
                    address: req.query.address
                })
              
            })
        })
    }
    
})





let person ={
    name: "Elishka",
    age: "17"

}

app.get('/person', function (req, res) {
    console.log(req.query);
})

app.listen(3000,() => {
    console.log('Server is up on port 3000')
})


