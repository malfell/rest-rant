//Modules and Globals
//configure .env file
require('dotenv').config();

//Require needed modules
const express = require('express');

//initialize the app object
const app = express();

//Express Settings
//defines the view engine
app.set('views', __dirname + '/views') //is this needed?
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
//static folder
app.use(express.static('public'));

//Controllers and Routes
//imports the router
app.use('/places', require('./controllers/places'))

//make homepage route
app.get('/', (req, res) => {
    //res.send is changed to res.render to render the view
    //home view specifically. No need to specify the views folder when
    //calling a render method. Render already knows to look in the views folder.
    res.render('home')
})

//wildcard route that directs to 404
//this route MUST be on the bottom or it will override other pages!!
app.get('*', (req, res) => {
    //chain .status(404) after res to have an official 404 call
    // res.status(404).send(`
    //     <h1>404 Page</h1>
    // `)
    
    //switch to res.render
    res.render('error404');
})

//listen for connections
app.listen(process.env.PORT);