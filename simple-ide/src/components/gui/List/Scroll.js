import { VariableSizeList as List } from 'react-window'
import React from 'react'
import Row from './Row'

export const ScrollContext = React.createContext({})

const ScrollArea = ({ width, height, list, listRef }) => {
  const sizeMap = React.useRef({})
  const setSize = React.useCallback((index, size) => {
    sizeMap.current = { ...sizeMap.current, [index]: size }
    listRef.current.resetAfterIndex(0)
    console.log(index, size)
  }, [])
  const getSize = React.useCallback(index => sizeMap.current[index] || 50, [])
  return (
    <ScrollContext.Provider value={{ setSize, width }}>
      <List
        height={height}
        width={width}
        itemCount={list.length}
        itemSize={getSize}
        ref={listRef}
      >
        {({ index, style }) => (
          <div style={style}>
            <Row width={width} index={index} data={list[index]} />
          </div>
        )}
      </List>
    </ScrollContext.Provider>
  )
}

export default ScrollArea
