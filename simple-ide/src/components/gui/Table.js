import React from 'react'

import { map as ObjectMap } from '../../utils/map'

const _showHeader = (columns) => {
  return columns.map((item, index) => {
    return <td key={index}>{item.label}</td>
  })
}

const _showData = (data, editMode) => {
  const _onChange = (e) => {
    console.log(e.target.value, 'change')
  }
  if (!editMode) {
    return data
  }
  return <textarea value={data} onChange={_onChange} />
}

const _showCell = (rowNum, key, data, onCellClick) => {
  const [editMode, setEditMode] = React.useState(false)

  function _onCellClick () {
    if (onCellClick) onCellClick(rowNum, key)
  }
  const _onMouseEnter = () => {
    setEditMode(true)
    // console.log('mouse enter', rowNum, key)
  }
  const _onMouseLeave = () => {
    setEditMode(false)
    // console.log('mouse leave', rowNum, key)
  }
  return (
    <td
      key={key}
      onClick={_onCellClick}
      onMouseEnter={_onMouseEnter}
      onMouseLeave={_onMouseLeave}
    >
      {_showData(data, editMode)}
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
