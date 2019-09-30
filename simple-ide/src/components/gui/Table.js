import React from 'react'

import { map as ObjectMap } from '../../utils/map'

const _showHeader = (columns) => {
  return columns.map((item, index) => {
    return <td key={index}>{item.label}</td>
  })
}

const _showCell = (rowNum, key, data, onCellClick) => {
  function _onCellClick () {
    if (onCellClick) onCellClick(rowNum, key)
  }
  const _onMouseEnter = () => {
    console.log('mouse enter', rowNum, key)
  }
  const _onMouseLeave = () => {
    console.log('mouse leave', rowNum, key)
  }
  return (
    <td
      key={key}
      onClick={_onCellClick}
      onMouseEnter={_onMouseEnter}
      onMouseLeave={_onMouseLeave}
    >
      {data}
    </td>
  )
}

const _showRow = (item, rowNum, onCellClick) => {
  return ObjectMap(item, (cell, key) => {
    return _showCell(rowNum, key, cell, onCellClick)
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
