import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import reportWebVitals from "./reportWebVitals"

const gqlEndpoint =
  process.env.NODE_ENV === "production"
    ? "https://dac-node-gql-test-backend.herokuapp.com/graphql/"
    : "http://localhost:8000/graphql/"

const client = new ApolloClient({
  uri: gqlEndpoint,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
