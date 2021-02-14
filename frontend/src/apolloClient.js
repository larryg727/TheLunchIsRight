import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: process.env.REACT_API_URL || "http://localhost:5000/graphql",
  cache: new InMemoryCache()
})

export default client
