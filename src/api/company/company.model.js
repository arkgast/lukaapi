const mongoose = require('mongoose')

const commonFieldAttrs = {
  type: String,
  trim: true
}

const companySchema = new mongoose.Schema({
  handle: {
    ...commonFieldAttrs,
    index: true,
    unique: true,
    required: true
  },
  detail: commonFieldAttrs,
  facebook: commonFieldAttrs,
  location: {
    street: commonFieldAttrs,
    city: commonFieldAttrs,
    zip: commonFieldAttrs,
    country: commonFieldAttrs,
    countryCode: {
      ...commonFieldAttrs,
      index: true
    }
  },
  labels: {
    firstLabel: commonFieldAttrs,
    secondLabel: commonFieldAttrs
  }
}, { timestamps: true })

module.exports = mongoose.model('company', companySchema)
