import React from 'react'
import { useTheme } from '@material-ui/core/styles'

const About = () => {
  const classes = useTheme()
  console.log( classes )
  return (
    <div className='mypage'>
      <h1>'About'</h1>
    </div>
  )
}

export default About
