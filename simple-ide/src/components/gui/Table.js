import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import './gui.css'

const Table = ({ data, columns }) => {
  return (
    <div>
      <ReactTable
        defaultPageSize={data.length}
        showPagination={false}
        data={data}
        columns={columns}
      />
    </div>
  )
}

export default Table
