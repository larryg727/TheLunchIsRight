const { GraphQLDataSource } = require("apollo-datasource-graphql")
const { gql } = require("apollo-server-express")

class YelpGraphqlAPI extends GraphQLDataSource {
  baseURL = "https://api.yelp.com/v3/graphql"

  willSendRequest(request) {
    if (!request.headers) {
      request.headers = {}
    }
    request.headers.authorization = `Bearer ${process.env.YELP_API_KEY}`
  }

  getLunches = async args => {
    try {
      const response = await this.query(GET_LUNCHES, {
        variables: args
      })
      return response.data.search.business
    } catch (e) {
      console.error(e)
    }
  }
}

const GET_LUNCHES = gql`
  query GetLunches($location: String!) {
    search(location: $location, limit: 5) {
      business {
        name
      }
    }
  }
`

module.exports = YelpGraphqlAPI