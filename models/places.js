
// Require Mongoose
const mongoose = require('mongoose')

// Declare a new Schema for defining a place. 
//Create an instance of the class--Mongoose schema
const placeSchema = new mongoose.Schema({
    //must define fields with a type
    //id field is not needed--Mongo creates it automatically
    //fields can be required or have default values
    name: { type: String, required: true },
    pic: String,
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: Number
})

//custom methods
placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

// create and exports the model
module.exports = mongoose.model('Place', placeSchema)










// MENTALLY DELETED BUT KEEPING FOR POSTERITY AND BACKUP

// //array for places data
// //array name needs to be changed to module.exports !!!!
// module.exports = [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     // https://unsplash.com/@ninjason Jason Leung
//     pic: '/images/rest-jason-leung.jpg',
// }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     // https://unsplash.com/@rebaspike Reba Spike (need to include credits)
//     pic: '/images/cat-cafe-reba-spike.jpg',
// }];