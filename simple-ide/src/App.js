import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'

// import { NavLink } from 'react-router-dom'

import About from './pages/About'
import Cells from './pages/Cells'
import Items from './pages/Items'
import Messages from './pages/Messages'
import Variables from './pages/Variables'

import Menu from './components/gui/Menu'

const pageList = [
  { name: 'Variables', icon: 'list', link: '/vars', component: Variables },
  { name: 'Cells', icon: 'grid_on', link: '/cells', component: Cells },
  { name: 'Items', icon: 'work', link: '/items', component: Items },
  { name: 'Messages', icon: 'message', link: '/messages', component: Messages },
  { name: 'Divider' },
  { name: 'About', icon: 'info', link: '/about', component: About }
]

// const Pages = () => {
//   return <Switch>
//     <Route exact path='/' component={About} />
//     <Route exact path='/about' component={About} />
//     <Route exact path='/cells' component={Cells} />
//     <Route exact path='/items' component={Items} />
//     <Route exact path='/mess' component={Messages} />
//     <Route exact path='/vars' component={Variables} />
//   </Switch>
// }

function App () {
  const [headerName, setHeaderName] = React.useState('Simple IDE')
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Menu header={headerName} items={pageList} />
    </ThemeProvider>
  )
}

export default App
