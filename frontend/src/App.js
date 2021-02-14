import React from "react"
import "antd/dist/antd.css"
import { Provider } from "react-redux"
import store from "./redux/store"
import { ApolloProvider } from "@apollo/client"
import client from "./apolloClient"
import HomePage from "./componenets/HomePage"

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </ApolloProvider>
  )
}

export default App
