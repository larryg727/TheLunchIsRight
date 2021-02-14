const { gql } = require("apollo-server-express")
const RandomWinner = require("./randomWinner")

const typeDefs = gql`
  type Query {
    getLunchSpin(location: String!): LunchSpin
  }

  type LunchSpin {
    lunches: [Business]
    winner: Business
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
`

const resolvers = {
  Query: {
    getLunchSpin: async (parent, args, context) => {
      const lunches = await context.YelpGraphqlAPI.getLunches(args)
      const randomWinner = new RandomWinner(lunches)
      return { lunches: randomWinner.lunches, winner: randomWinner.pickWinner() }
    }
  }
}

module.exports = { typeDefs, resolvers }
