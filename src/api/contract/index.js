module.exports = {
  resolvers: require('./contract.resolvers'),
  typeDefs: require('../../utils/gqlLoader')('contract/contract.graphql'),
  model: require('./contract.model')
}
