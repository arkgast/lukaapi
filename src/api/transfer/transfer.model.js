const mongoose = require('mongoose')

const commonFieldAttrs = {
  type: String,
  trim: true
}

const contractSchema = new mongoose.Schema({
  handle: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true
  },
  source: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'person'
  },
  target: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product'
  },
  amount: Number,
  symbol: commonFieldAttrs,
  labels: {
    firstLabel: commonFieldAttrs,
    secondLabel: commonFieldAttrs
  }
}, { timestamps: true })

module.exports = mongoose.model('transfer', contractSchema)
