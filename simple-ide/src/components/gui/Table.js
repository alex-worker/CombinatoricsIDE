import React from 'react'

import { map as ObjectMap } from '../../utils/map'

const _showHeader = (columns) => {
  return columns.map((item, index) => {
    return <td key={index}>{item.label}</td>
  })
}

const _showRow = (item, index) => {
  return (
    <td key={index}>
      {item}
    </td>
  )
}

const _showRows = (list) => {
  return list.map((item, index) => (
    <tr key={index}>
      {ObjectMap(item, _showRow)}
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
