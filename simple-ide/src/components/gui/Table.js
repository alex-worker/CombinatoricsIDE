import React from 'react'

import { map as ObjectMap } from '../../utils/map'

const _showHeader = (columns) => {
  return columns.map((item, index) => {
    return <td key={index}>{item.label}</td>
  })
}

const _showData = (data, editMode, onChange) => {
  if (!editMode) {
    return data
  }
  return <textarea value={data} onChange={onChange} />
}

const _showCell = (rowNum, key, data, onChange) => {
  const [editMode, setEditMode] = React.useState(false)

  const _onChange = (e) => {
    // console.log(rowNum, key, e.target.value, 'change')
    onChange(rowNum, key, e.target.value)
  }

  const _onMouseEnter = () => {
    setEditMode(true)
  }

  const _onMouseLeave = () => {
    setEditMode(false)
  }

  return (
    <td
      key={key}
      onMouseEnter={_onMouseEnter}
      onMouseLeave={_onMouseLeave}
    >
      {_showData(data, editMode, _onChange)}
    </td>
  )
}

const _showRow = (item, rowNum, onCellChange) => {
  return ObjectMap(item, (cell, key) => {
    return _showCell(rowNum, key, cell, onCellChange)
  })
}

const _showRows = (list, onCellChange) => {
  return list.map((item, index) => (
    <tr key={index}>
      {_showRow(item, index, onCellChange)}
    </tr>
  ))
}

const MyTablePlace = ({ list, columns, onCellChange }) => (
  <table>
    <thead>
      <tr>
        {_showHeader(columns)}
      </tr>
    </thead>
    <tbody>
      {_showRows(list, onCellChange)}
    </tbody>
  </table>
)

export default MyTablePlace
