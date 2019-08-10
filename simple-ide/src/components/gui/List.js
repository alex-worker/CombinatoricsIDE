import React from 'react'
import ReactTable from 'react-table'

var list = []

for (let index = 0; index < 100; index++) {
  const fakeData = {
    name: faker.name.findName(),
    description: faker.lorem.paragraph()
  }
  list.push(fakeData)
}

const List = ({ list }) => {
  return <div className='list-place'>
    <ReactTable
    data={data}
    columns={columns}
  />
  </div>
}

export default List
