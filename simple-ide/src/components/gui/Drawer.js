import React from 'react'

// import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
// import Divider from '@material-ui/core/Divider'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
// import ListItemText from '@material-ui/core/ListItemText'

// import InboxIcon from '@material-ui/icons/MoveToInbox'
// import MailIcon from '@material-ui/icons/Mail'

// const useStyles = makeStyles(theme => ({
// }))

const MyDrawer = ({ open, onClose, children }) => {
  return <Drawer
    open={open}
    onClose={onClose}
  >
    {children}
  </Drawer>
}

export default MyDrawer
