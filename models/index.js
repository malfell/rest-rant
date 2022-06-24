//require dotenv package
//done to ensure we can use value of MONGO_URI environment variable
//needs to be .config() not .require()--assignment instructions wrong
require('dotenv').config();
// require mongoose
const mongoose = require('mongoose');

// connect to Mongoose
mongoose.connect(process.env.MONGO_URI, {
    //optional properties, but they remove warning messages from terminal
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//exports the models
//connects to all models
module.exports.Place = require('./places');
module.exports.Comment = require('./comment');