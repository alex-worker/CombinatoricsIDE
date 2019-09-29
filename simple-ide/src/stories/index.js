import React from 'react'
import faker from 'faker'

import Sidenav from '../components/gui/Sidenav'
import Grid from '../components/gui/Grid'

import { storiesOf } from '@storybook/react'

var list = []

for (let index = 0; index < 100; index++) {
  const fakeData = {
    name: faker.name.findName(),
    description: faker.lorem.paragraph()
  }
  list.push(fakeData)
}

const columns = [
  { key: 'name', label: 'Имя' },
  { key: 'description', label: 'Описание' },
]

storiesOf('GUI', module)
  .add('Sidenav', () =>
    <Sidenav>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </Sidenav>
  )
  .add('Grid', () =>
    <div style={{ height: '100vh', border: '1px black solid' }}>
      <Grid name={'My Custom Grid'}
        list={list}
        columns={columns}
      />
    </div>
  )
