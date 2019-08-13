import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'
import Divider from '@material-ui/core/Divider'

import Drawer from './Drawer'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  header: {
    flexGrow: 1
  }
}))

const makePages = (items) => (
  <Switch>
    {
      items.map((item, index) => (
        item.name === 'Divider' ? null : <Route
          exact path={item.link} component={item.component} key={index} />
      ))
    }
  </Switch>
)

const makeItem = (item, index) => (
  item.name === 'Divider' ? <Divider key={index} /> : <ListItem button component={Link} key={index} to={item.link}>
    <ListItemIcon>
      <Icon>{item.icon}</Icon>
    </ListItemIcon>
    <ListItemText primary={item.name} />
  </ListItem>
)

const makeList = (items) => (
  <List>
    { items.map(makeItem) }
  </List>
)

const Menu = ({ header = 'undefined', items }) => {
  const classes = useStyles()

  const [isDrawerOpen, setDrawerOpen] = React.useState(false)

  const openDrawer = () => {
    setDrawerOpen(true)
  }

  const closeDrawer = () => {
    console.log('close')
    setDrawerOpen(false)
  }

  return <div className={classes.root}><Router>
    <AppBar position='static'>
      <Toolbar>
        <IconButton color='inherit' className={classes.menuButton} onClick={openDrawer} >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' className={classes.header} >
          {header}
        </Typography>
        <Button color='inherit' >Login</Button>
      </Toolbar>
    </AppBar>
    <Drawer open={isDrawerOpen} onClose={closeDrawer} >
      {makeList(items)}
    </Drawer>
    {makePages(items)}
  </Router></div>
}

export default Menu
