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
        <li>Variables</li>
        <li>Cells</li>
        <li>Items</li>
        <li>Messages</li>
      </Sidenav>
    </div>
  )
}

export default App
