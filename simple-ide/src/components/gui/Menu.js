import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'
import Divider from '@material-ui/core/Divider'

import AppBar from './AppBar'
import Drawer from './Drawer'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}))

const makePages = (items, defaultIndexPage = 0) => {
  console.log('makePages')
  return <Switch>
    <Route exact path='/' component={items[defaultIndexPage].component} key={0} />
    {
      items.map((item, index) => (
        item.name === 'Divider' ? null : <Route
          exact path={item.link} component={item.component} key={index} />
      ))
    }
  </Switch>
}

const makeItem = (item, index) => (
  item.name === 'Divider' ? <Divider key={index} /> : <ListItem button key={index} component={Link} to={item.link} >
    <ListItemIcon>
      <Icon>{item.icon}</Icon>
    </ListItemIcon>
    <ListItemText primary={item.name} />
  </ListItem>
)

const makeList = (items, onClick) => {
  console.log('makeList')
  return <List onClick={onClick} >
    { items.map(makeItem) }
  </List>
}


const Menu = ({ header = 'undefined', items, defaultIndexPage }) => {
  console.log('Menu')
  const [isDrawerOpen, setDrawerOpen] = React.useState(false)

  const openDrawer = () => {
    setDrawerOpen(true)
  }

  const closeDrawer = () => {
    setDrawerOpen(false)
  }

  const classes = useStyles()

  // экономим на спичках
  const menuItemList = React.useMemo(() => makeList(items, closeDrawer), [items])
  const pageList = React.useMemo(() => makePages(items, defaultIndexPage), [items, defaultIndexPage])

  return <div className={classes.root}><Router>
    <AppBar header={header} onClick={openDrawer} />
    <Drawer open={isDrawerOpen} onClose={closeDrawer} >
      {menuItemList}
    </Drawer>
    {pageList}
  </Router></div>
}

export default Menu
