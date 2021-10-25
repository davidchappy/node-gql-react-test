require("dotenv").config()
const express = require("express")
const {
  ApolloServerPluginLandingPageGraphQLPlayground
} = require("apollo-server-core")
const { ApolloServer } = require("apollo-server-express")

async function startApolloServer(config) {
  const app = config.app || express()
  const { typeDefs, resolvers } = config

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    introspection: true
  })
  await server.start()
  server.applyMiddleware({ app })

  const port = process.env.PORT || 8000
  await new Promise(resolve => app.listen({ port }, resolve))
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )

  return { server, app }
}

module.exports = startApolloServer
