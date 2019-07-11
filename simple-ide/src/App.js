import React from 'react'
import './App.css'

import Sidenav from './components/gui/Sidenav'

// import M from 'materialize-css'
// M.AutoInit()

// hello there: https://stackoverflow.com/questions/35499842/how-to-use-materialize-css-with-react
// and here https://medium.com/dij-please/initializing-materializecss-in-react-ab4dcd0cb784

function App () {
  return (
    <div className='App'>
      <Sidenav>
        <li><a href='#vars'><i className='material-icons'>list</i>Variables</a></li>
        <li><a href='#cells'><i className='material-icons'>grid_on</i>Cells</a></li>
        <li><a href='#items'><i className='material-icons'>work</i>Items</a></li>
        <li><a href='#mess'><i className='material-icons'>message</i>Messages</a></li>
        <li><div className='divider' /></li>
        <li><a href='#mess'><i className='material-icons'>about</i>About</a></li>
      </Sidenav>
    </div>
  )
}

export default App
