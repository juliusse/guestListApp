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
  category: {
    type: [String],
    required: true
  }
});

var GuestModel = mongoose.model('Guest', GuestSchema);