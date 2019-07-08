import { React, Component } from 'react'
import M from 'materialize-css'

// ref can only be used on class components
export default class SomeComponent extends Component {
  // get a reference to the element after the component has mounted
  componentDidMount () {
    M.Sidenav.init(this.sidenav)
  }

  render () {
    return (
      <ul className={this.props.classes}
        ref={(sidenav) => { this.sidenav = sidenav }}
        id={this.props.id}>
        // menuItems
      </ul>
    )
  }
}
