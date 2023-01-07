const mongoose = require('mongoose');

// Schema -> how the data will look, validate data
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
});

// How we will manipulate the data (CRUD operations)
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
