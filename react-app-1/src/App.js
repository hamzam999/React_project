import React from 'react'
import "./index.css";

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      //key: value pairs
      counter: 0,
    }
  }

  render() {
    const incrementCounter = () => {
      this.setState({
        counter: this.state.counter + 1,
      })
    }

    const decrementCounter = () => {
      if (this.state.counter > 0)
        this.setState({
          counter: this.state.counter - 1,
        })
    }

    return (
      <div className="counter">
        <h1>{this.state.counter}</h1>
        {/* arrow function everytime */}
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement </button>
      </div>
    )
  }
}

export default App
