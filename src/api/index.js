const admin = require('firebase-admin')
const merge = require('lodash/merge')

const common = require('./common')
const contract = require('./contract')
const company = require('./company')
const payment = require('./payment')
const person = require('./person')
const product = require('./product')
const transfer = require('./transfer')

const firestore = admin.firestore()

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
      contract: firestore.collection('contracts'),
      company: firestore.collection('companies'),
      person: firestore.collection('people'),
      payment: firestore.collection('payments'),
      product: firestore.collection('products'),
      transfer: firestore.collection('transfers')
    }
  }
}
