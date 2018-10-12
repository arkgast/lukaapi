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
  source: commonFieldAttrs,
  target: commonFieldAttrs,
  amount: {
    type: Number,
    default: 1000
  },
  symbol: {
    type: String,
    default: 'BOB'
  },
  nature: commonFieldAttrs,
  labels: {
    firstLabel: commonFieldAttrs,
    secondLabel: commonFieldAttrs
  }
}, { timestamps: true })

module.exports = mongoose.model('contract', contractSchema)
