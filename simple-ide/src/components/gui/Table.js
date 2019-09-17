import React from 'react'

import { map as ObjectMap } from '../../utils/map'

const _showHeader = (columns) => {
  return columns.map((item, index) => {
    return <td key={index}>{item.label}</td>
  })
}

const _showRow = (item, onCellClick) => {
  return ObjectMap(item, (index) => {
    return (
      <td key={index} onClick={onCellClick}>
        {index}
      </td>
    )
  })
}

const _showRows = (list, onCellClick) => {
  return list.map((item, index) => (
    <tr key={index}>
      {_showRow(item, onCellClick)}
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
      {_showRows(list, onCellClick)}
    </tbody>
  </table>
)

export default MyTablePlace
