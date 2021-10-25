const startServer = require("./server")
const { typeDefs, resolvers } = require("./graphql")

startServer({ typeDefs, resolvers })
