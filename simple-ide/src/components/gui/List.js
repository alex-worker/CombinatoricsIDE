import React, { useEffect } from 'react'
import faker from 'faker'

import { VariableSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import getSize from './getsize'
import './gui.css'

// var list = []
var heightCache = []

// for (let index = 0; index < 100; index++) {
//   const fakeData = {
//     name: faker.name.findName(),
//     description: faker.lorem.paragraph()
//   }
//   list.push(fakeData)
// }

const Row = ({ row }) => {
  return <div className='list-item'>
    { row.description }
  </div>
}

const getItemSize = (text) => {
  // const text = list[index].description
  const size = getSize({
    text,
    attributes: {
      width: '400px'
    },
    className: 'list-item'
  })
  let { height } = size
  // height += 5
  return height
}

const _calcHeights = (list) => {
  heightCache = list.map((item) => {
    return getItemSize(item.description)
  })
}

const List = ({ list }) => {
  useEffect(() => {
    _calcHeights(list)
  })
  return <div className='list-place'><AutoSizer>
    {({ height, width }) => {
      return <VariableSizeList
        height={height}
        width={width}
        itemCount={list.length}
        itemSize={index => heightCache[index]}
        // itemSize={getItemSize}
        estimatedItemSize={30}
      >
        {({ index, style }) => (
          <div style={style}>
            <Row row={list[index]} />
          </div>
        )}
      </VariableSizeList>
    }}
  </AutoSizer></div>
}

export default List
