//require mongoose
const mongoose = require('mongoose');

//comment schema
let commentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous'},
    rant: { type: Boolean, default: false },
    stars: { type: Number, required: true },
    content: {type: String, default: '' },
});

//export comment
module.exports = mongoose.model('Comment', commentSchema);