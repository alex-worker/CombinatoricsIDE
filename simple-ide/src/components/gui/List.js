import { useWindowSize } from './useWindowResize'
import React from 'react'

import { VariableSizeList as List } from 'react-window'

// import getHeight from './getheight'
// import './gui.css'

// var calculatedHash = []

// const Row = ({ row }) => {
//   return <div className='list-item'>
//     { row.description }
//   </div>
// }

// const getItemHeight = (width, text) => {
//   const height = getHeight({
//     text,
//     attributes: {
//       width: width + 'px'
//     },
//     className: 'list-item'
//   })
//   return height
// }

// const calcHash = (width, list) => {
//   console.log('calc...')
//   calculatedHash = list.map(item => {
//     return getItemHeight(width, item.description)
//   })
// }

const _getItemSize = (index) => {
  return 50
}

const Row = ({ index, data }) => {
  return (
    <div>
      {index}: {data.name} {data.description}
    </div>
  )
}

const MyList = ({ list }) => {
  const [width, height] = useWindowSize()
  return (
    <div className='list-place'>
      <List
        height={height}
        width={width}
        itemSize={_getItemSize}
        itemCount={list.length}
      >
        {({ index, style }) => (
          <div style={style}>
            <Row index={index} data={list[index]} />
          </div>
        )}
      </List>
    </div>
  )

  /* <AutoSizer>
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
  </AutoSizer></div> */
}

export default MyList
