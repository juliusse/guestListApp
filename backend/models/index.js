// Set up mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:/guestListApp');

// Include models
require('./guests');