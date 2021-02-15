const { gql, ApolloError } = require("apollo-server-express")
const RandomWinner = require("./randomWinner")
const { getAllCategories } = require("./mockData")

const typeDefs = gql`
  type Query {
    getLunchSpin(location: String!, categories: String!, radius: Float!, price: String!): LunchSpin
    categories: [Category]
  }

  type LunchSpin {
    lunches: [Business]!
    winner: Business!
  }

  type Business {
    id: String!
    name: String!
    url: String!
    display_phone: String
    review_count: Int
    rating: Float
    price: String
    location: Location
    photos: [String]
    distance: Float
  }

  type Location {
    address1: String
    city: String
    state: String
    postal_code: String
  }

  type Category {
    title: String!
    alias: String!
  }
`

const resolvers = {
  Query: {
    getLunchSpin: async (parent, args, context) => {
      const lunches = await context.YelpGraphqlAPI.getLunches(args)
      if (!lunches || !lunches.length) {
        throw new ApolloError("No Results Found. Try another location")
      }
      const randomWinner = new RandomWinner(lunches)
      return { lunches: randomWinner.lunches, winner: randomWinner.pickWinner() }
    },
    categories: () => getAllCategories()
  }
}

module.exports = { typeDefs, resolvers }
