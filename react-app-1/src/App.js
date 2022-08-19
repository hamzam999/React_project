import React from 'react'
import Counter from './components/Counter'
import NameForm from './components/NameForm'
import TodoInput from './components/Todoinput'
import TodoList from './components/TodoList'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import './index.css'

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
      <>
        <Counter
          counterCounter={this.state.counter}
          incrementCounter={incrementCounter}
          decrementCounter={decrementCounter}
        />
        <br></br>
        <Navbar counter={this.state.counter} />
        <br></br>
        <NameForm />
        <br></br>
        <TodoInput />
        <br></br>
        <TodoList />
        <br></br>
        <Welcome name="Hamza" />
      </>
    )
  }
}

export default App
