//Require method-override to delete and edit stuff
const methodOverride = require('method-override');
//expresses the router. This will hold all the routes.
const router = require('express').Router();

//imports places model
const places = require('../models/places.js')

router.use(methodOverride('_method'));

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

//EDIT ROUTE
//edit must be above show route because more specific parameters
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
       res.render('places/edit', { place: places[id], id: id }) 
    }
    
})

// SHOW Route
router.get('/:id', (req, res) => {
    // id must equal a number
    let id = Number(req.params.id)
    //if not a number, then error404
    if (isNaN(id)) {
        res.render('error404')
    }
    //if number that is NOT in array, then error404
    else if (!places[id]) {
        res.render('error404')
    }
    else {
      res.render('places/show', { place: places[id], id })  
    }
    
})


//UPDATE ROUTE
router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if(!places[id]) {
        res.render('error404')
    }
    else {
        //dig into the req.body and make sure data is valid!
        if (!req.body.pic) {
            //default image if one is not provided
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }

        //save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
})


//DELETE ROUTE
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        // Deletes method from array
        places.splice(id, 1)
        // res.send('STUB DELETE places/:id')
        // Redirect user to index page
        res.redirect('/places')
    }
})

//exports the router
module.exports = router;



