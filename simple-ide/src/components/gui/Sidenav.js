import React, { useEffect, useRef } from 'react'
import M from 'materialize-css'
import idgen from './idgen'
import 'materialize-css/dist/css/materialize.min.css'

const Sidenav = (props) => {
  const id = props.id || `sidenav_${idgen()}`
  const ref = useRef(null)

  useEffect(() => {
    M.Sidenav.init(ref.current)
  }, [])

  return (
    <>
      <ul id={id} ref={ref} className='sidenav'>
        {props.children}
      </ul>
      <a data-target={id} className='sidenav-trigger show-on-large' href='#nav'>
        <i className='material-icons'>menu</i>
      </a>
    </>
  )
}

export default Sidenav
