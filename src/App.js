import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import UsersList from './views/users/UserList'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/users">
          <UsersList />
        </Route>
        <Route path="/">Home</Route>
      </Switch>
    </Router>
  )
}

export default App
