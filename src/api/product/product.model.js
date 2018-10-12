const mongoose = require('mongoose')

const commonFieldAttrs = {
  type: String,
  trim: true
}

const productSchema = new mongoose.Schema({
  handle: commonFieldAttrs,
  source: {
    ...commonFieldAttrs,
    require: true
  },
  detail: {
    ...commonFieldAttrs,
    required: true
  },
  signer: {
    ...commonFieldAttrs,
    required: true
  },
  location: {
    street: commonFieldAttrs,
    city: commonFieldAttrs,
    zip: commonFieldAttrs,
    country: commonFieldAttrs,
    countryCode: commonFieldAttrs
  },
  labels: {
    firstLabel: commonFieldAttrs,
    secondLabel: commonFieldAttrs
  }
}, { timestamps: true })

module.exports = mongoose.model('product', productSchema)
