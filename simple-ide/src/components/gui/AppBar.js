import React from 'react'

import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  header: {
    flexGrow: 1
  }
}))

const MyAppBar = ({ header, onClick }) => {
  console.log('MyAppBar')
  const classes = useStyles()
  return <AppBar position='static'>
    <Toolbar>
      <IconButton color='inherit' className={classes.menuButton} onClick={onClick} >
        <MenuIcon />
      </IconButton>
      <Typography variant='h6' className={classes.header} >
        {header}
      </Typography>
      <Button color='inherit' >Login</Button>
    </Toolbar>
  </AppBar>
}

// ha-ha, custom areEqual
// https://dmitripavlutin.com/use-react-memo-wisely/
function areEqual (prevProps, nextProps) {
  if (prevProps.header === nextProps.header) return true
  return false
}

// export default React.memo(MyAppBar)
export default React.memo(MyAppBar, areEqual)
