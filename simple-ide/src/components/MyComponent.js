import React, {
  Component
} from 'react'

import M from 'materialize-css'

// ref can only be used on class components
class SomeComponent extends Component {
  // get a reference to the element after the component has mounted
  componentDidMount () {
    M.Sidenav.init(this.sidenav)
  }

  render () {
    return (
      const MyComponent = () => {
        return <div className='carousel'>
          <a className='carousel-item' href='#one!'><img src='https://lorempixel.com/250/250/nature/1' /></a>
          <a className='carousel-item' href='#two!'><img src='https://lorempixel.com/250/250/nature/2' /></a>
          <a className='carousel-item' href='#three!'><img src='https://lorempixel.com/250/250/nature/3' /></a>
          <a className='carousel-item' href='#four!'><img src='https://lorempixel.com/250/250/nature/4' /></a>
          <a className='carousel-item' href='#five!'><img src='https://lorempixel.com/250/250/nature/5' /></a>
        </div>
      }
    )
  }
}

export default SomeComponent
