import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import './gui.css'

const Table = ({ data, columns }) => {
  return (
    <div>
      <ReactTable
        defaultPageSize={1000}
        showPagination={false}
        data={data}
        columns={columns}
      />
    </div>
  )
}

export default Table
