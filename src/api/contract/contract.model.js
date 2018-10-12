const mongoose = require('mongoose')

const commonFieldAttrs = {
  type: String,
  trim: true
}

const contractSchema = new mongoose.Schema({
  handle: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    auto: true
  },
  source: {
    ...commonFieldAttrs,
    required: true
  },
  target: {
    ...commonFieldAttrs,
    required: true
  },
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
