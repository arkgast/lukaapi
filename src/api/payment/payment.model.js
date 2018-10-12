const mongoose = require('mongoose')

const commontFieldAttrs = {
  type: String,
  trim: true
}

const paymentSchema = mongoose.Schema({
  handle: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    auto: true
  },
  source: commontFieldAttrs,
  target: commontFieldAttrs,
  amount: Number,
  symbol: commontFieldAttrs,
  expiry: commontFieldAttrs,
  status: commontFieldAttrs,
  labels: {
    firstLabel: commontFieldAttrs,
    secondLabel: commontFieldAttrs
  }
})

module.exports = mongoose.model('payment', paymentSchema)
