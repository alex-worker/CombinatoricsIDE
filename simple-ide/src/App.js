import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'

import Container from '@material-ui/core/Container'

import About from './pages/About'
import Cells from './pages/Cells'
import Items from './pages/Items'
import Messages from './pages/Messages'
import Variables from './pages/Variables'

import Menu from './components/gui/Menu'

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
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Menu />
      <Router>
        <Pages />
      </Router>
    </ThemeProvider>
  )
}

export default App
