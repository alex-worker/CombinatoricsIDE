import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { BrowserRouter as Router, } from 'react-router-dom';

const Home = () => {
  return 'Home'
}

const Roster = () => {
  return 'Roster'
}

const Schedule = () => {
  return 'Roster'
}

const Main = () => (
  <main>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/roster' component={Roster} />
        <Route path='/schedule' component={Schedule} />
      </Switch>
    </Router>
  </main>
)

export default Main
