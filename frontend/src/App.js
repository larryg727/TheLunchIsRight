import React from "react"
import "antd/dist/antd.css"
import { Provider } from "react-redux"
import store from "./redux/store"
import { ApolloProvider } from "@apollo/client"
import client from "./apolloClient"
import HomePage from "./componenets/HomePage"
import GlobalStyles from "./globalStyles"

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <GlobalStyles />
        <HomePage />
      </Provider>
    </ApolloProvider>
  )
}

export default App
