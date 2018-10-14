const merge = require('lodash/merge')

const common = require('./common')
const contract = require('./contract')
const company = require('./company')
const payment = require('./payment')
const person = require('./person')
const product = require('./product')
const transfer = require('./transfer')

const dbOperations = require('../utils/dbOperations')

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
    collections: {
      contract: dbOperations('contracts'),
      company: dbOperations('companies'),
      person: dbOperations('people'),
      payment: dbOperations('payments'),
      product: dbOperations('products'),
      transfer: dbOperations('transfers')
    }
  }
}
