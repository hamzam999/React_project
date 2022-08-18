import React from 'react'
import Counter from './Counter'

class Navbar extends React.Component {
  render() {
    return (
      <div style={{ height: 50, background: 'blue' }}>{this.props.counter}</div>
    )
  }
}

export default Navbar
