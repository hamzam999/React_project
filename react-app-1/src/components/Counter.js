import React from 'react'

class Counter extends React.Component {
  render() {
    // console.log('props ', this.props, typeof this.props)

    return (
      <div class="counter">
        <h1>{this.props.counterCounter}</h1>
        {/* arrow function everytime */}
        <button onClick={this.props.incrementCounter}>Increment</button>
        <button onClick={this.props.decrementCounter}>Decrement </button>
      </div>
    )
  }
}

export default Counter
 