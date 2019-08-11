import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import './gui.css'

// // const _fullCell = ({ row }) => {
// //   return <div className='list-item'>
// //     {row.description}
// //   </div>
// }

const _columns = [
  {
    Header: 'Name',
    accessor: 'name',
    className: 'list-item',
    style: { 'white-space': 'unset' }
  },
  {
    Header: 'Description',
    accessor: 'description',
    className: 'list-item',
    style: { 'white-space': 'unset' }
  }
]

const Table = (props) => {
  const { list } = props
  return <div className='list-place' ><ReactTable
    data={list}
    columns={_columns}
    defaultPageSize={300}
  /></div>
}

export default Table
