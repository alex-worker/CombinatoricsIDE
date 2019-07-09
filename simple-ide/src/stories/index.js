import React from 'react'

import Sidenav from '../components/gui/Sidenav'

import { storiesOf } from '@storybook/react'

storiesOf('GUI', module)
  .add('Sidenav', () =>
    <Sidenav>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </Sidenav>
  )
