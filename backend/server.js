require("dotenv").config()
const express = require("express")
const { ApolloServer } = require("apollo-server-express")
const { typeDefs, resolvers } = require("./schema")
const YelpGraphqlAPI = require("./yelpService")

const version = process.env.npm_package_version

const app = express()

app.get("/health", (req, res) => {
  res.send(`Healthy. Running v${version}`)
})

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    yelpGraphqlApi: new YelpGraphqlAPI()
  })
})

server.applyMiddleware({ app })

app.listen(5000, () => {
  console.log("Server initializing...")
  console.log(`Ready at http://localhost:5000${server.graphqlPath}`)
})
