import React from 'react'
import faker from 'faker'

import Sidenav from '../components/gui/Sidenav'
import List from '../components/gui/List'
import Table from '../components/gui/Table'

import { storiesOf } from '@storybook/react'

var list = []

for (let index = 0; index < 100; index++) {
  const fakeData = {
    name: faker.name.findName(),
    description: faker.lorem.paragraph()
  }
  list.push(fakeData)
}

storiesOf('GUI', module)
  .add('Sidenav', () =>
    <Sidenav>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </Sidenav>
  )
  .add('List', () =>
    <div style={{ height: '100vh', border: '1px black solid' }}>
      <List
        list={list}
      />
    </div>
  )
  .add('Table', () =>
    <div style={{ height: '100vh', border: '1px black solid' }}>
      <Table
        list={list}
      />
    </div>
  )
