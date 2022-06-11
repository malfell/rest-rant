

//imports places model
const places = require('../models/places.js')

//expresses the router. This will hold all the routes.
const router = require('express').Router();

//index page
//the GET route will eventually show a list of all places
router.get('/', (req, res) => {
    //render to go into folder and bring up the page
    //since there's another folder inside the views folder, that folder
    //must be referenced
    //places array goes into render as second arg--allows us to use array inside the view
    res.render('places/index', { places })
})

//CREATE
//IF SOMETHING GOES WRONG, COME BACK HERE!!! 
//Refer to Rest-Rant Part 5, end of step 3
router.post('/', (req, res) => {
    // console.log not needed anymore since code is working,
    //but I'm keeping it for future reference
    // console.log(req.body)
    // Provides a default pic and location
    if (!req.body.pic) {
        //Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if(!req.body.state) {
        req.body.state = 'USA'
    }
    //adds the new data to the places array
    places.push(req.body)
    //res.send is changed to res.redirect to redirect to another route
    //redirects to index route to see newly added place
    res.redirect('/places')
  })

//NEW Route
router.get('/new', (req, res) => {
    res.render('places/new')
})

//exports the router
module.exports = router;



