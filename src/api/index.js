const merge = require('lodash/merge')

const common = require('./common')
const contract = require('./contract')
const company = require('./company')
const payment = require('./payment')
const person = require('./person')
const product = require('./product')
const transfer = require('./transfer')
const loaders = require('./loaders')

module.exports = {
  typeDefs: [
    common.typeDefs,
    contract.typeDefs,
    company.typeDefs,
    payment.typeDefs,
    person.typeDefs,
    product.typeDefs,
    transfer.typeDefs
  ].join(' '),
  resolvers: merge({},
    contract.resolvers,
    company.resolvers,
    payment.resolvers,
    person.resolvers,
    product.resolvers,
    transfer.resolvers
  ),
  context: {
    models: {
      contract: contract.model,
      company: company.model,
      person: person.model,
      payment: payment.model,
      product: product.model,
      transfer: transfer.model
    },
    loaders: loaders()
  }
}
