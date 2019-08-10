import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const _cell = ({ row }) => {
  return <div>
    {row}
  </div>
}

const _columns = [
  {
    Header: 'Name',
    accessor: 'name',
    Cell: row => (
      row
      ),
  },
  {
    Header: 'Description',
    accessor: 'description',
  }
]


const Table = (props) => {
  const { list } = props
  return <ReactTable 
    data={list}
    columns={_columns}
  />
}

export default Table
