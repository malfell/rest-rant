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

//NEW Route
router.get('/new', (req, res) => {
    res.render('places/new')
})

// SHOW
// IF CODE GOES WRONG, SOMETHING LIKE THIS IS NEEDED PROBABLY
// breads.get('/:arrayIndex', (req, res) => {
//     if (Bread[req.params.arrayIndex]) {
//       res.render('Show', {
//         bread:Bread[req.params.arrayIndex]
//       })
//     } else {
//       res.render('404')
//     }
//   })

//CREATE
//IF SOMETHING GOES WRONG, COME BACK HERE!!! 
//Refer to Rest-Rant Part 5, end of step 3
router.post('/', (req, res) => {
    res.send('POST /places stub')
  })

//exports the router
module.exports = router;



