//expresses the router. This will hold all the routes.
const router = require('express').Router();

//index page
//the GET route will eventually show a list of all places
router.get('/', (req, res) => {
    //array for places data
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        // https://unsplash.com/@ninjason Jason Leung
        pic: '/images/rest-jason-leung.jpg',
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        // https://unsplash.com/@rebaspike Reba Spike (need to include credits)
        pic: '/images/cat-cafe-reba-spike.jpg',
    }];
    //render to go into folder and bring up the page
    //since there's another folder inside the views folder, that folder
    //must be referenced
    //places array goes into render as second arg--allows us to use array inside the view
    res.render('places/index', { places })
})

//exports the router
module.exports = router;



