import React from 'react'
import faker from 'faker'

import Sidenav from '../components/gui/Sidenav'
import Table from '../components/gui/Table'

import { storiesOf } from '@storybook/react'

var list = []

for (let index = 0; index < 1000; index++) {
  const fakeData = {
    name: faker.name.findName(),
    description: faker.lorem.paragraph()
  }
  list.push(fakeData)
}

// const columns = [
//   {
//     Header: 'Name',
//     accessor: 'name',
//     className: 'list-item',
//     // minWidth: '30%',
//     // style: { 'white-space': 'unset' }
//   },
//   {
//     Header: 'Description',
//     accessor: 'description',
//     className: 'list-item',
//     minWidth: '70%',
//     style: { 'white-space': 'unset' }
//   }
// ]

storiesOf('GUI', module)
  // .add('Sidenav', () =>
  //   <Sidenav>
  //     <li>Item 1</li>
  //     <li>Item 2</li>
  //     <li>Item 3</li>
  //   </Sidenav>
  // )
  // .add('Table', () =>
  //   <Table data={list} />
  // )
