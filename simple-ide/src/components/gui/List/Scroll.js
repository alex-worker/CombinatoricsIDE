import { VariableSizeList as List } from 'react-window'
import React from 'react'
import Row from './Row'

export const ScrollContext = React.createContext({})

const ScrollArea = ({ width, height, list, rowFunc }) => {
  const listRef = React.createRef()
  const sizeMap = React.useRef({})
  const setSize = React.useCallback((index, size) => {
    sizeMap.current = { ...sizeMap.current, [index]: size }
    listRef.current.resetAfterIndex(0)
  }, [listRef])
  const getSize = React.useCallback(index => sizeMap.current[index] || 50, [])
  return (
    <ScrollContext.Provider value={{ setSize }}>
      <ul className='collection'>
        <List
          height={height}
          width={width}
          itemCount={list.length}
          itemSize={getSize}
          ref={listRef}
        >
          {({ index, style }) => (
            <li className='collection-item'>
              <div style={style}>
                <Row width={width} rowFunc={rowFunc} index={index} data={list[index]} />
              </div>
            </li>
          )}
        </List>
      </ul>
    </ScrollContext.Provider>
  )
}

export default ScrollArea
