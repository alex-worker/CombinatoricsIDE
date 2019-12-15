import React from 'react'

import List from '../components/gui/List'

const vars = [
  { name: 'var_act', default: '0', description: 'Текущее действие' },
  { name: 'var_ret', default: '0', description: 'Что возвратил скрипт после своего выполнения, стек не реализован да и не нужен' },
  { name: 'var_pos_y', default: '0', description: 'Позиция X ( персонажа, действия, итп) ' },
  { name: 'var_pos_x', default: '0', description: 'Позиция Y ( персонажа, действия, итп) ' },
  { name: 'item_id', default: '0', description: 'ID активного предмета' },
  { name: 'game_over', default: '0', description: 'Тип окончания игры, 0 - игра еще не окончена.' }
]

const onClickRow = (index) => {
  console.log(index)
}

const showRow = (index, data) => {
  return (
    <tr onClick={() => onClickRow(index)}>
      <td>[{index}]</td>
      <td><b>{data.name}</b></td>
      <td>({data.default})</td>
      <td>{data.description}</td>
    </tr>
  )
}

const Variables = () => {
  return (
    <div>
      <h3>'Variables'</h3>
      <List list={vars} rowFunc={showRow} />
    </div>
  )
}

export default Variables
