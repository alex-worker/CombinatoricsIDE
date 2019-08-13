import React from 'react'

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
  {
    Header: 'Name',
    accessor: 'name',
    maxWidth: '150px'
  },
  {
    Header: 'Default',
    accessor: 'default',
    maxWidth: '50px'
  },
  {
    Header: 'Comment',
    accessor: 'comment',
    style: { 'white-space': 'unset' }
  }
]

const Variables = () => {
  return <div>
    <h1>'Variables'</h1>
  </div>
}

export default Variables
