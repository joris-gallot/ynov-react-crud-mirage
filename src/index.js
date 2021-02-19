// import { Server } from 'miragejs'
import { ApiClient, ApiProvider } from 'jsonapi-react'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { schema } from './schema'
import { Server } from './server'

Server()

const client = new ApiClient({
  url: 'http://localhost:3000/api',
  schema,
})

console.log(client)

ReactDOM.render(
  <ApiProvider client={client}>
    <App />
  </ApiProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
