const merge = require('lodash/merge')

const common = require('./common')
const company = require('./company')
const person = require('./person')
const product = require('./product')
const loaders = require('./loaders')

module.exports = {
  typeDefs: [
    common.typeDefs,
    person.typeDefs,
    company.typeDefs,
    product.typeDefs
  ].join(' '),
  resolvers: merge({},
    person.resolvers,
    company.resolvers,
    product.resolvers
  ),
  context: {
    models: {
      person: person.model,
      company: company.model,
      product: product.model
    },
    loaders: loaders()
  }
}
