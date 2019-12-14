import React from 'react'

import { ScrollContext } from './Scroll'

const Row = ({ width, index, data }) => {
  const root = React.useRef()
  const { setSize } = React.useContext(ScrollContext)

  React.useEffect(() => {
    const height = root.current.getBoundingClientRect().height
    setSize(index, height)
  }, [index, setSize])

  return (
    <div ref={root} className='list-item'>
      {index}: {data.name} {data.description}
    </div>
  )
}
export default Row
