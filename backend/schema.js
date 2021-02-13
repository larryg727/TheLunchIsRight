const { gql } = require("apollo-server-express")

const typeDefs = gql`
  type Query {
    lunches(location: String!): [Business]
  }

  type Business {
    name: String!
  }
`

const resolvers = {
  Query: {
    lunches: (parent, args, context) => context.YelpGraphqlAPI.getLunches(args)
  }
}

module.exports = { typeDefs, resolvers }
