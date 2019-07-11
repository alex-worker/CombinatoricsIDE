import React from 'react'
import './App.css'

// import Main from './Main'

import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Sidenav from './components/gui/Sidenav'
// import Link from './components/gui/Link'

import About from './pages/About'
import Cells from './pages/Cells'
import Items from './pages/Items'
import Messages from './pages/Messages'
import Variables from './pages/Variables'

// import M from 'materialize-css'
// M.AutoInit()

// hello there: https://stackoverflow.com/questions/35499842/how-to-use-materialize-css-with-react
// and here https://medium.com/dij-please/initializing-materializecss-in-react-ab4dcd0cb784

function App () {
  return (
    <div className='App'>
      <Router>
        <Sidenav>
          <li><Link to='/vars'><i className='material-icons'>list</i>Variables</Link></li>
          <li><Link to='/cells'><i className='material-icons'>grid_on</i>Cells</Link></li>
          <li><Link to='/items'><i className='material-icons'>work</i>Items</Link></li>
          <li><Link to='/mess'><i className='material-icons'>message</i>Messages</Link></li>
          <li><div className='divider' /></li>
          <li><Link to='/about'><i className='material-icons'>info</i>About</Link></li>
        </Sidenav>
        <div className='main'>
          <Route exact path='/' component={About} />
          <Route exact path='/about' component={About} />
          <Route exact path='/cells' component={Cells} />
          <Route exact path='/items' component={Items} />
          <Route exact path='/mess' component={Messages} />
          <Route exact path='/vars' component={Variables} />
        </div>
      </Router>
    </div>
  )
}

export default App
