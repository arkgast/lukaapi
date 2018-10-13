module.exports = {
  resolvers: require('./payment.resolvers'),
  typeDefs: require('../../utils/gqlLoader')('payment/payment.graphql')
}
