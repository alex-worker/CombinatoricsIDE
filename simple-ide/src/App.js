import React from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Sidenav from './components/gui/Sidenav'

import About from './pages/About'
import Cells from './pages/Cells'
import Items from './pages/Items'
import Messages from './pages/Messages'
import Variables from './pages/Variables'

import 'materialize-css/dist/css/materialize.min.css'

// hello there: https://stackoverflow.com/questions/35499842/how-to-use-materialize-css-with-react
// and here https://medium.com/dij-please/initializing-materializecss-in-react-ab4dcd0cb784

const Menu = () => {
  return <nav>
    <Sidenav>
      <li><Link className='sidenav-close' to='/vars'><i className='material-icons'>list</i>Variables</Link></li>
      <li><Link className='sidenav-close' to='/cells'><i className='material-icons'>grid_on</i>Cells</Link></li>
      <li><Link className='sidenav-close' to='/items'><i className='material-icons'>work</i>Items</Link></li>
      <li><Link className='sidenav-close' to='/mess'><i className='material-icons'>message</i>Messages</Link></li>
      <li><div className='divider' /></li>
      <li><Link className='sidenav-close' to='/about'><i className='material-icons'>info</i>About</Link></li>
    </Sidenav>
  </nav>
}

const Pages = () => {
  return <Switch>
    <Route exact path='/' component={About} />
    <Route exact path='/about' component={About} />
    <Route exact path='/cells' component={Cells} />
    <Route exact path='/items' component={Items} />
    <Route exact path='/mess' component={Messages} />
    <Route exact path='/vars' component={Variables} />
  </Switch>
}

function App () {
  return (
    <div className='App'>
      <Router>
        <Menu />
        <Pages />
      </Router>
    </div>
  )
}

export default App
