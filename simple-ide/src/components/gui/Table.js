import React from 'react'

const _showHeader = (columns) => {
  return columns.map((item, index) => {
    return <td key={index}>{item.label}</td>
  })
}

const _showRow = (item) => {
  return item.map((item, index) => {
    return <td>
      lol
    </td>
  })
}

const _showRows = (list) => {
  return list.map((item, index) => (
    <tr key={index}>
      {_showRow(item)}
    </tr>
  ))
}

const MyTablePlace = ({ list, columns, onCellClick }) => (
  <table>
    <thead>
      <tr>
        {_showHeader(columns)}
      </tr>
    </thead>
    <tbody>
      {_showRows(list)}
    </tbody>
  </table>
)

export default MyTablePlace
