//configure .env file
require('dotenv').config();

//Require needed modules
const express = require('express');

//initialize the app object
const app = express();

//make homepage route
app.get('/', (req, rest) => {
    res.send('Hello world')
})

//wildcard route that directs to 404
//this route MUST be on the bottom or it will override other pages!!
app.get('*', (req, res) => {
    //chain .status(404) after res to have an official 404 call
    res.status(404).send(`
        <h1>404 Page</h1>
    `)
})

//listen for connections
app.listen(process.env.PORT);

