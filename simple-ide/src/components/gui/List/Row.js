import React from 'react'

import { ScrollContext } from './Scroll'

const Row = ({ width, rowFunc, index, data }) => {
  const root = React.useRef()
  const { setSize } = React.useContext(ScrollContext)

  React.useEffect(() => {
    const height = root.current.getBoundingClientRect().height
    setSize(index, height)
  }, [index, setSize])
  return (
    <div ref={root} className='list-item'>
      {rowFunc(index, data)}
    </div>
  )
}
export default Row
