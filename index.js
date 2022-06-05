// //configure .env file
// require('dotenv').config();

// //Require needed modules
// const express = require('express');

// //initialize the app object
// const app = express();

// //imports the router
// app.use('/places', require('./controllers/places'))

// //make homepage route
// app.get('/', (req, res) => {
//     res.send('Hello world')
// })

// //wildcard route that directs to 404
// //this route MUST be on the bottom or it will override other pages!!
// app.get('*', (req, res) => {
//     //chain .status(404) after res to have an official 404 call
//     res.status(404).send(`
//         <h1>404 Page</h1>
//     `)
// })

// //listen for connections
// app.listen(process.env.PORT);

require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places))

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)
