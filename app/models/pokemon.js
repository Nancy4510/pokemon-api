const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  attack: {
    type: String,
    required: true
  },
  weakness: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  timestamps: true,
  // in case we need to use virtuals, this allows for it
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
})

module.exports = mongoose.model('Pokemon', pokemonSchema)
