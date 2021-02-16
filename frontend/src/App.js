import React from "react"
import "antd/dist/antd.css"
import { Provider } from "react-redux"
import store from "./redux/store"
import { ApolloProvider } from "@apollo/client"
import client from "./apolloClient"
import HomePage from "./componenets/HomePage"
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', Helvetica, sans-serif;

    & button.ant-btn-primary {
      background-color: #E51C23;
      border-color: #E51C23;

      &:hover,
      :focus {
        background-color: #fc474e;
        border-color: #fc474e;
      }
    }

    & button.ant-btn-secondary {
      &:hover,
      :focus {
        border-color: #fc474e;
        color: #fc474e;
      }
    }
    
    & .ant-checkbox-checked .ant-checkbox-inner {
      background-color: #E51C23;
      border-color: #E51C23;
    }
  }
`

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
