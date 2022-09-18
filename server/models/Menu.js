const mongoose = require('mongoose')

const MenuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Please add a price']
  },
})


module.exports = mongoose.model('Menu', MenuSchema)