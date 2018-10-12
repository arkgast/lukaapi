module.exports = {
  resolvers: require('./person.resolvers'),
  typeDefs: require('../../utils/gqlLoader')('person/person.graphql'),
  model: require('./person.model')
}
