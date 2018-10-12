const mongoose = require('mongoose')

const commontFieldAttrs = {
  type: String,
  trim: true
}

const paymentSchema = mongoose.Schema({
  handle: commontFieldAttrs,
  source: commontFieldAttrs,
  target: commontFieldAttrs,
  amount: commontFieldAttrs,
  symbol: commontFieldAttrs,
  expiry: commontFieldAttrs,
  status: commontFieldAttrs,
  labels: {
    firstLabel: commontFieldAttrs,
    secondLabel: commontFieldAttrs
  }
})

module.exports = mongoose.model('payment', paymentSchema)
