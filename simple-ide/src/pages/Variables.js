import React from 'react'
import Grid from '../components/gui/Grid'
import Storage from '../storage/Storage'

const db = new Storage()

const vars = [
  { name: 'var_act', default: '0', description: 'Текущее действие' },
  { name: 'var_ret', default: '0', description: 'Что возвратил скрипт после своего выполнения, стек не реализован да и не нужен' },
  { name: 'var_pos_y', default: '0', description: 'Позиция X ( персонажа, действия, итп) ' },
  { name: 'var_pos_x', default: '0', description: 'Позиция Y ( персонажа, действия, итп) ' },
  { name: 'item_id', default: '0', description: 'ID активного предмета' },
  { name: 'game_over', default: '0', description: 'Тип окончания игры, 0 - игра еще не окончена.' }
]

const _onClick = (rowNum, index) => {
  console.log('onClick!', rowNum, index, vars[rowNum][index])
}

const _onClickAdd = () => {
  console.log('onClickAdd!')
}

const columns = [
  { key: 'name', label: 'Имя' },
  { key: 'default', label: 'Def' },
  { key: 'description', label: 'Описание' }
]

const Variables = () => {
  return (
    <>
      <Grid
        name='Variables'
        list={vars}
        columns={columns}
        onAdd={_onClickAdd}
        onEdit={_onClick}
      />
    </>
  )
}

export default Variables
