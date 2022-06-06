// setup
const express = require('express')
const app = express()
const PORT = 8000

// test data
const aomori = {
    island: 'Honshu',
    region: 'Tohoku',
    largeCity: 'Aomori',
    totalArea: {
        size: 9645.64,
        unit: 'km^2',
    },
    elevation: {
        highest: 1624.7,
        lowest: 0,
        unit: 'm'
    },
    population: {
        '2020': 1237984
    }
}

// root directory route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// api routing
app.get('/api/prefecture/', (req, res) => {
    res.json(aomori)
    console.log(aomori)
})

// starting the server
app.listen(PORT, () => {
    console.log(`The server is running on port: ${PORT}`)
})
