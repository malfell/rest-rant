//Require needed modules
const express = require('express');

//initialize the app object
const app = express();

//make homepage route
app.get('/', (req, rest) => {
    res.send('Hello world')
})

//listen for connections
app.listen(3000);