import { useWindowSize } from './useWindowResize'
import React from 'react'

import { VariableSizeList as List } from 'react-window'

import './gui.css'

const _getItemSize = (index) => {
  return 50
}

const Row = ({ index, data }) => {
  const root = React.useRef()
  React.useEffect(() => {
    // setSize(index, root.current.getBoundingClientRect().height)
  }, [windowWidth])

  return (
    <div ref={root} className='list-item'>
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
}

export default MyList
