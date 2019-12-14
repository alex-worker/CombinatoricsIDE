import { useWindowSize } from '../useWindowResize'
import React from 'react'

import './gui.css'

import Scroll from './Scroll'

// let sizeMap = []

// const Row = ({ width, index, data }) => {
//   const root = React.useRef()

//   const setSize = React.useCallback((index, size) => {
//     console.log(index, size)
//     sizeMap = { ...sizeMap, [index]: size }
//   }, [])

//   React.useEffect(() => {
//     const height = root.current.getBoundingClientRect().height
//     setSize(index, height)
//     // console.log(height)
//   }, [width])

//   return (
//     <div ref={root} className='list-item'>
//       {index}: {data.name} {data.description}
//     </div>
//   )
// }

// const sizeMap = React.useRef({})
// const setSize = React.useCallback((index, size) => {
//   sizeMap.current = { ...sizeMap.current, [index]: size }
// }, [])
// const getSize = React.useCallback(index => sizeMap.current[index] || 50, [])

// const Row = ({ width, index, data }) => {
//   const root = React.useRef()
//   React.useEffect(() => {
//     setSize(index, root.current.getBoundingClientRect().height)
//   }, [])
//   return (
//     <div ref={root} className='list-item'>
//       {index}: {data.name} {data.description}
//     </div>
//   )
// }

export const listRef = React.createRef()
export const chatHistoryRef = React.createRef()

const MyList = ({ list }) => {
  const [width, height] = useWindowSize()
  return (
    <div className='list-place'>
      <Scroll
        width={width}
        height={height}
        list={list}
        listRef={listRef}
      />
    </div>
  )
}

export default MyList
