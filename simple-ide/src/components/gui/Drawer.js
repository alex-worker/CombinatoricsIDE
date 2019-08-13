import React from 'react'
import Drawer from '@material-ui/core/Drawer'

const MyDrawer = ({ open, onClose, children }) => {
  return <Drawer
    open={open}
    onClose={onClose}
  >
    {children}
  </Drawer>
}

export default MyDrawer
