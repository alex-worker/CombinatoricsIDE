import React, { useEffect } from 'react'

import { VariableSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import getHeight from './getheight'
import './gui.css'

const Row = ({ row }) => {
  return <div className='list-item'>
    { row.description }
  </div>
}

const getItemHeight = (width, text) => {
  const height = getHeight({
    text,
    attributes: {
      width: width + 'px'
    },
    className: 'list-item'
  })
  return height
}

const List = ({ list }) => {
  return <div className='list-place'><AutoSizer>
    {({ height, width }) => {
      return <VariableSizeList
        height={height}
        width={width}
        itemCount={list.length}
        itemSize={index => getItemHeight(width, list[index].description)}
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
