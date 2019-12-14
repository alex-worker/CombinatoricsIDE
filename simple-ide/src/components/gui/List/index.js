import { useWindowSize } from '../useWindowResize'
import React from 'react'

import './gui.css'

import Scroll from './Scroll'

const MyList = ({ list }) => {
  const [width, height] = useWindowSize()
  return (
    <div className='list-place'>
      <Scroll
        width={width}
        height={height}
        list={list}
      />
    </div>
  )
}

export default MyList
