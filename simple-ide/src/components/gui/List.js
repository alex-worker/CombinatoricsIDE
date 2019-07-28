import React from 'react'
import faker from 'faker'

import { VariableSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import getSize from './getsize'
import './gui.css'

var list = []

for (let index = 0; index < 100; index++) {
  const fakeData = {
    name: faker.name.findName(),
    description: faker.lorem.paragraph()
  }
  list.push(fakeData)
}

const Row = ({ index, style }) => {
  console.log( list[index].description )
  return <div
    style={{
      // ...style
    }}
    className='list-item'>
    { list[index].description }
  </div>
}

const getItemSize = (index) => {
  const text = list[index].description
  const size = getSize({
    text,
    // attributes: {
    // width: '100hv'
    // },
    className: 'list-item'
  })
  let { height } = size
  height += 5
  return height
}

const List = (props) => {
  // const { list } = props
  return <div className='list-place'><AutoSizer>
    {({ height, width }) => (
      <VariableSizeList
        height={height}
        // width={width}
        itemCount={list.length}
        itemSize={getItemSize}
        estimatedItemSize={30}
      >
        {Row}
      </VariableSizeList>
    )}
  </AutoSizer></div>
}

export default List
