import React from 'react'
import Table from '../components/gui/Table'

const vars = [
  { name: 'var_act', default: '0', comment: 'Current action' },
  { name: 'var_ret', default: '0', comment: 'Script return value' },
  { name: 'var_pos_y', default: '0', comment: 'Pos X' },
  { name: 'var_pos_x', default: '0', comment: 'Pos Y' },
  { name: 'item_id', default: '0', comment: 'Active item id' },
  { name: 'game_over', default: '0', comment: 'Game over type, 0 - game not ending.' }
]

// const systemVarOffset = 10

const columns = [
  { key: 'name', name: 'Name' },
  { key: 'default', name: 'Default' },
  { key: 'comment', name: 'Comment' }
]

const Variables = () => {
  return (
    <>
      <div>
        <h1>'About'</h1>
      </div>
      <div className='AppPage'>
        <Table columns={columns} list={vars} />
      </div>
    </>
  )
}

export default Variables
