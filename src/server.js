const { GraphQLServer } = require('graphql-yoga')

require('./db')
const gqlServerConfig = require('./api')

const serverOptions = {
  port: 5000,
  endpoint: '/graphql',
  playground: '/docs',
  tracing: true,
  debug: true
}

const server = new GraphQLServer(gqlServerConfig)
server.start(serverOptions, ({ port }) => console.log(`Server running on port ${port}`))
