import React, { Fragment, useEffect, useRef } from 'react'
import M from 'materialize-css'
import idgen from './idgen'

const Sidenav = (props) => {
  const id = props.id || `sidenav_${idgen()}`
  const ref = useRef(null)

  useEffect(() => {
    M.Sidenav.init(ref.current)
  }, [ref])

  return <Fragment>
    <ul id={id} ref={ref} className='sidenav sidenav-fixed color-dark'>
      {props.children}
    </ul>
    <a data-target={id} className='sidenav-trigger' href='#nav'>
      <i className='material-icons'>menu</i>
    </a>
  </Fragment>
}

export default Sidenav
