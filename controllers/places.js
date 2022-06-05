//expresses the router. This will hold all the routes.
const router = require('express').Router();

//index page
//the GET route will eventually show a list of all places
router.get('/', (req, res) => {
    res.send('GET / places')
})

//exports the router
module.exports = router;