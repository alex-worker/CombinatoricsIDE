import React, { useEffect } from 'react'

import { VariableSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import getHeight from './getheight'
import './gui.css'

var calculatedHash = []

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

const calcHash = (width, list) => {
  console.log('calc...')
  calculatedHash = list.map(item => {
    return getItemHeight(width, item.description)
  })
}

const List = ({ list }) => {
  return <div className='list-place'><AutoSizer>
    {({ height, width }) => {
      calcHash(width, list)
      return <VariableSizeList
        height={height}
        width={width}
        itemCount={list.length}
        // itemSize={index => getItemHeight(width, list[index].description)}
        itemSize={index => calculatedHash[index]}
        estimatedItemSize={10}
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
