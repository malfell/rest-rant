//require models folder to access database
//has to be require('../models/index.js') NOT ('./models')
    //instructions wrong again :(
const db = require('../models/index.js')

//create new place and hardcode data for now
db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg',
    founded: 2020
}])
//add logic for when create resolves (success or failure) for a promise
//resolves promise
.then(() => {
    console.log('Success!')
    //ends script
    process.exit()
})
//fails promise
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
