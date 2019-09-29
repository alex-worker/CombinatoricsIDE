import React from 'react'
// import { AutoSizer, Table, Column, CellMeasurerCache, CellMeasurer } from 'react-virtualized'
import faker from 'faker'
import Table from '../components/gui/Table'
import 'materialize-css/dist/css/materialize.min.css'

var list = []

const _onClick = () => {
  // alert('click!')
}

for (let index = 0; index < 1000; index++) {
  const fakeData = {
    name: faker.name.findName(),
    description: faker.lorem.paragraph()
  }
  list.push(fakeData)
}

const columns = [
  { key: 'name', label: 'Name', width: 150 },
  {
    key: 'description',
    label: 'Description',
    width: (width) => { return width - 100 }
  }
]

const About = () => {
  return (
    <>
      <div>
        <h1>'About'</h1>
      </div>
      <div className='AppContainer'>
        <Table columns={columns} list={list} onCellClick={_onClick} />
      </div>
    </>
  )
}

export default About
