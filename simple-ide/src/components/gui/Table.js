import React from 'react'

import { map as ObjectMap } from '../../utils/map'

const _showHeader = (columns) => {
  return columns.map((item, index) => {
    return <td key={index}>{item.label}</td>
  })
}

const _showCell = (rowNum, colNum, data, onCellClick) => {
  const _onCellClick = () => {
    console.log(rowNum, colNum, 'clocl')
  }
  return (
    <td key={colNum} onClick={_onCellClick}>
      {data}
    </td>
  )
}

const _showRow = (item, rowNum, onCellClick) => {
  return ObjectMap(item, (cell, index) => {
    return _showCell(rowNum, index, cell, onCellClick)
  })
}

const _showRows = (list, onCellClick) => {
  return list.map((item, index) => (
    <tr key={index}>
      {_showRow(item, index, onCellClick)}
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
