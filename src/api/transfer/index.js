module.exports = {
  resolvers: require('./transfer.resolvers'),
  typeDefs: require('../../utils/gqlLoader')('transfer/transfer.graphql'),
  model: require('./transfer.model')
}
