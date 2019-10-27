import { useWindowSize } from './useWindowResize'
import React from 'react'

import { VariableSizeList as List } from 'react-window'

import './gui.css'

let sizeMap = []

const Row = ({ width, index, data }) => {
  const root = React.useRef()

  const setSize = React.useCallback((index, size) => {
    console.log(index, size)
    sizeMap = { ...sizeMap, [index]: size }
  }, [])

  React.useEffect(() => {
    const height = root.current.getBoundingClientRect().height
    setSize(index, height)
    // console.log(height)
  }, [width])

  return (
    <div ref={root} className='list-item'>
      {index}: {data.name} {data.description}
    </div>
  )
}

const MyList = ({ list }) => {
  const [width, height] = useWindowSize()
  const getSize = React.useCallback(index => sizeMap[index] || 50, [])
  return (
    <div className='list-place'>
      <List
        height={height}
        width={width}
        itemSize={getSize}
        itemCount={list.length}
      >
        {({ index, style }) => (
          <div style={style}>
            <Row width={width} index={index} data={list[index]} />
          </div>
        )}
      </List>
    </div>
  )
}

export default MyList
