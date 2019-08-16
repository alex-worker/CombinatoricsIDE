import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'

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

function App () {
  const [headerName, setHeaderName] = React.useState('Simple IDE')

  // const changePage = () => {
  //   console.log('changePage!!')
  // }

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Menu header={headerName} items={pageList} defaultIndexPage={5} />
    </ThemeProvider>
  )
}

export default App
