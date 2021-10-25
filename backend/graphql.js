const { gql } = require("apollo-server-express")
const { db, hello } = require("./db/firebase")

const typeDefs = gql`
  type Hello {
    say: String
    sing: String
  }

  type Query {
    hello: Hello
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => ({
      say: hello(),
      sing: "hellooooooo"
    })
  }
}

module.exports = {
  typeDefs,
  resolvers
}
