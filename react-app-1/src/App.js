import React from 'react'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      //key: value pairs
      counter: 0,
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        {/* arrow function everytime */}
        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1,
            })
          }}
        >
          Increment
        </button>
      </div>
    )
  }
}

export default App
