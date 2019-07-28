import React, { useEffect } from 'react'

import { VariableSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import getSize from './getsize'
import './gui.css'

const Row = ({ row }) => {
  return <div className='list-item'>
    { row.description }
  </div>
}

const getItemSize = (width, text) => {
  console.log( width )
  const size = getSize({
    text,
    attributes: {
      width: width + 'px'
    },
    className: 'list-item'
  })
  const { height } = size
  return height
}

const List = ({ list }) => {
  return <div className='list-place'><AutoSizer>
    {({ height, width }) => {
      // console.log( width )
      return <VariableSizeList
        height={height}
        width={width}
        itemCount={list.length}
        itemSize={index => getItemSize(width, list[index].description)}
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
