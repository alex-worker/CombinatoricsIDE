import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
// import ListItemText from '@material-ui/core/ListItemText'
// import Icon from '@material-ui/core/Icon'
// import Divider from '@material-ui/core/Divider'

import AppBar from './AppBar'
import Drawer from './Drawer'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}))

const PageList = ({ items, defaultIndexPage = 0 }) => {
  // console.log('PageList')
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

const Menu = ({ header = 'undefined', onChangePage, items, defaultIndexPage }) => {
  // console.log('Menu')
  const [isDrawerOpen, setDrawerOpen] = React.useState(false)

  const openDrawer = () => {
    setDrawerOpen(true)
  }

  const closeDrawer = () => {
    setDrawerOpen(false)
  }

  const onClickMenu = () => {
    closeDrawer()
    // onChangePage()
  }
  
  const classes = useStyles()

  // экономим на спичках
  // const menuItemList = React.useMemo(() => makeList(items, closeDrawer), [items])
  // const pageList = React.useMemo(() => makePages(items, defaultIndexPage), [items, defaultIndexPage])

  return <div className={classes.root}><Router>
    <AppBar header={header} onClick={openDrawer} />
    <Drawer items={items} open={isDrawerOpen} onClose={closeDrawer} onClick={onClickMenu} />
    <PageList items={items} defaultIndexPage={defaultIndexPage} />
  </Router></div>
}

export default Menu
