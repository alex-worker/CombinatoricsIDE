import React from 'react'
import Table from '../components/gui/Table'

// const vars = [
//   { name: 'var_act', default: '0', description: 'Current action' },
//   { name: 'var_ret', default: '0', description: 'Script return value' },
//   { name: 'var_pos_y', default: '0', description: 'Pos X' },
//   { name: 'var_pos_x', default: '0', description: 'Pos Y' },
//   { name: 'item_id', default: '0', description: 'Active item id' },
//   { name: 'game_over', default: '0', description: 'Game over type, 0 - game not ending.' }
// ]

const vars = [
  { name: 'var_act', default: '0', description: 'Текущее действие' },
  { name: 'var_ret', default: '0', description: 'Что возвратил скрипт после своего выполнения, стек не реализован да и не нужен' },
  { name: 'var_pos_y', default: '0', description: 'Позиция X ( персонажа, действия, итп) ' },
  { name: 'var_pos_x', default: '0', description: 'Позиция Y ( персонажа, действия, итп) ' },
  { name: 'item_id', default: '0', description: 'ID активного предмета' },
  { name: 'game_over', default: '0', description: 'Тип окончания игры, 0 - игра еще не окончена.' }
]
// const systemVarOffset = 10

const columns = [
  { key: 'name', label: 'Имя' },
  { key: 'default', label: 'Значение по умолчанию' },
  { key: 'description', label: 'Описание' }
]

const Variables = () => {
  return (
    <>
      <div>
        <h1>'Variables'</h1>
      </div>
      <div className='AppPage'>
        <Table columns={columns} list={vars} />
      </div>
    </>
  )
}

export default Variables
