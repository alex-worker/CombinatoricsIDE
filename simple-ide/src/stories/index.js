import React from 'react'
import faker from 'faker'

import Sidenav from '../components/gui/Sidenav'
import List from '../components/gui/List/index'
import EditGrid from '../components/gui/EditGrid'

import { storiesOf } from '@storybook/react'

var list = []

for (let index = 0; index < 1000; index++) {
  const fakeData = {
    name: faker.name.findName(),
    description: faker.lorem.paragraph()
  }
  list.push(fakeData)
}

const showListRow = (index, data) => {
  return (
    <div>
      {index}: {data.name} {data.description}
    </div>
  )
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
    <List list={list} rowFunc={showListRow} />
  )
  .add('EditGrid', () =>
    <EditGrid name='EditGrid' list={list} rowFunc={showListRow} />
  )
