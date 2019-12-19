import React from 'react'
import List from '../List'

const MyGrid = ({ name, list, rowFunc }) => {
  return (
    <div>
      <h3>{name}</h3>
      <List list={list} rowFunc={rowFunc} />
    </div>
  )
}

export default MyGrid
