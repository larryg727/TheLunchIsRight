require("dotenv").config()
const express = require("express")
const { ApolloServer } = require("apollo-server-express")
const { typeDefs, resolvers } = require("./schema")
const YelpGraphqlAPI = require("./yelpService")

const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    YelpGraphqlAPI: new YelpGraphqlAPI()
  })
})

server.applyMiddleware({ app })

app.listen(5000, () => {
  console.log("Server initializing...")
  console.log(`Ready at http://localhost:5000${server.graphqlPath}`)
})
