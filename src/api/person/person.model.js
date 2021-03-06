const mongoose = require('mongoose')

const commonFieldAttrs = {
  type: String,
  trim: true
}

const personSchema = new mongoose.Schema({
  firstName: {
    ...commonFieldAttrs,
    required: true
  },
  lastName: {
    ...commonFieldAttrs,
    required: true
  },
  handle: {
    ...commonFieldAttrs,
    index: true,
    unique: true,
    required: true
  },
  phone: commonFieldAttrs,
  email: commonFieldAttrs,
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

module.exports = mongoose.model('person', personSchema)
