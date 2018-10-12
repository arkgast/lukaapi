const merge = require('lodash/merge')

const common = require('./common')
const company = require('./company')
const payment = require('./payment')
const person = require('./person')
const product = require('./product')
const loaders = require('./loaders')

module.exports = {
  typeDefs: [
    common.typeDefs,
    company.typeDefs,
    payment.typeDefs,
    person.typeDefs,
    product.typeDefs
  ].join(' '),
  resolvers: merge({},
    company.resolvers,
    payment.resolvers,
    person.resolvers,
    product.resolvers
  ),
  context: {
    models: {
      company: company.model,
      person: person.model,
      payment: payment.model,
      product: product.model
    },
    loaders: loaders()
  }
}
