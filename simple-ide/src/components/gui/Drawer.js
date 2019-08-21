import React from 'react'

import { Link } from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'
import Divider from '@material-ui/core/Divider'

const makeItem = (item, index) => (
  item.name === 'Divider' ? <Divider key={index} /> : (
    <ListItem button key={index} component={Link} to={item.link}>
      <ListItemIcon>
        <Icon>{item.icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={item.name} />
    </ListItem>
  )
)

const ItemList = ({ items, onClick }) => {
  // console.log('ItemList')
  return (
    <List onClick={onClick}>
      {items.map(makeItem)}
    </List>
  )
}

const MyDrawer = ({ items, open, onClose, onClick }) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
    >
      <ItemList items={items} onClick={onClick} />
    </Drawer>
  )
}

export default MyDrawer
