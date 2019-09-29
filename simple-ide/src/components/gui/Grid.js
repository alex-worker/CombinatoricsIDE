import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'

import Table from './Table'

const ButtonAdd = ({onClick}) => {
  return (
    <button className="btn-floating btn-large waves-effect waves-light red" onClick={onClick}>
      <i className="material-icons">+</i>
    </button>
  )
}

const Grid = ({name, columns, list, onAdd, onEdit, onDel }) => {
    return <div>
        <h1>{name}<ButtonAdd onClick={onAdd} /></h1>
        <Table columns={columns} list={list} onCellClick={onEdit} />
    </div>
}

export default Grid