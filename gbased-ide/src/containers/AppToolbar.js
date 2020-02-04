import React from 'react'
import { Helmet } from 'react-helmet'

import {
  Toolbar,
  ToolbarTitle
} from '../components/library/Toolbar'

const name = 'Combinatorica IDE'

const AppToolbar = () => {
  return (
    <Toolbar>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <ToolbarTitle>
        {name || 'Untitled'}
      </ToolbarTitle>
    </Toolbar>
  )
}

export default AppToolbar
