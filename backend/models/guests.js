var mongoose = require('mongoose');

var GuestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  categories: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('Guest', GuestSchema);