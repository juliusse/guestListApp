var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
    name: String,
    email: String
});

mongoose.model('Person', PersonSchema);