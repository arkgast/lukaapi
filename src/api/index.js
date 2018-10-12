const merge = require('lodash/merge')

const common = require('./common')
const company = require('./company')
const person = require('./person')
const loaders = require('./loaders')

module.exports = {
  typeDefs: [
    common.typeDefs,
    person.typeDefs,
    company.typeDefs
  ].join(' '),
  resolvers: merge({},
    person.resolvers,
    company.resolvers
  ),
  context: {
    models: {
      person: person.model,
      company: company.model
    },
    loaders: loaders()
  }
}
