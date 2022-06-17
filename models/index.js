// require mongoose
const mongoose = require('mongoose')

// connect to Mongoose
mongoose.connect(process.env.MONGO_URI, {
    //optional properties, but they remove warning messages from terminal
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//exports the models
//connects to all models
module.exports.Place = require('./places')