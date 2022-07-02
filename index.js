//Modules and Globals
//configure .env file
require('dotenv').config();
//Require needed modules
const express = require('express');
//Require method-override to delete and edit stuff
const methodOverride = require('method-override');

const mongoose = require('mongoose')


//initialize the app object
const app = express();

// mongoose can be called anywhere after the required mongoose
// The first argument that connect takes is the Mongo URI. 
// The second argument contains optional properties that get rid 
// of deprecation warnings.
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

//Express Settings
//defines the view engine
app.set('views', __dirname + '/views') //is this needed?
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
//static folder
app.use(express.static('public'));
//body parser for decrypting data (like usernames)
//needs to go ABOVE the routers or you get undefined :(
app.use(express.urlencoded( {extended: true }));
//use _method as keyword to change methods when needed
//for delete/edit
app.use(methodOverride('_method'));

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