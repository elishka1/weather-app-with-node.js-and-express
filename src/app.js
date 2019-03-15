const path = require('path');
const express = require('express');


const app = express();

const publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory))

// app.get('', function (req, res) {
//     res.send('Hiya')
// })





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


