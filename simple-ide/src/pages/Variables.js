import React from 'react'

import EditGrid from '../components/gui/EditGrid'

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
    <div onClick={() => onClickRow(index)} index={index}>
      [{index}]
      <a className='btn-floating red' href='.'><i className='material-icons left'>clear</i></a>
      <b>{data.name.toUpperCase()}</b>
      ({data.default})
      {data.description}
    </div>
  )
}

const Variables = () => {
  return <EditGrid name='Variables' list={vars} rowFunc={showRow} />
}

export default Variables
