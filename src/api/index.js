const person = require('./person')
const loaders = require('./loaders')
const merge = require('lodash/merge')

module.exports = {
  typeDefs: [
    person.typeDefs
  ].join(' '),
  resolvers: merge({}, person.resolvers),
  context: {
    models: {
      person: person.model
    },
    loaders: loaders()
  }
}
