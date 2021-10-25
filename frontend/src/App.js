import { useQuery } from "@apollo/client"
import "./App.css"
import { HELLO_QUERY } from "./graphql/hello"
import logo from "./logo.svg"

const App = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY)

  const getContent = () => {
    if (error) return `GraphQL Error: ${error}`
    if (loading) return "Loading..."

    return data.hello.say
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          // href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {getContent()}
        </a>
      </header>
    </div>
  )
}

export default App
