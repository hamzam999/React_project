import React from 'react'
import Counter from './components/Counter'
import NameForm from './components/NameForm'
import TodoInput from './components/Todoinput'
import TodoList from './components/TodoList'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import { v4 as uuid } from 'uuid'
import './index.css'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      //key: value pairs
      counter: 0,
      todos: [],
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

    const addTodo = (value) => {
      const newTodo = {
        id: uuid(),
        completed: false,
        title: value,
      }
      const updatedArray = [...this.state.todos, newTodo]
      this.setState({
        todos: updatedArray,
      })
    }

    const deleteTodo = (todoId) => {
      const updatedArray = this.state.todos.filter((todo) => todo.id !== todoId)
      this.setState({
        todos: updatedArray,
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
        <TodoInput addTodo={addTodo} />
        <br></br>
        <TodoList todos={this.state.todos} deleteTodo={deleteTodo} />
        <br></br>
        <Welcome name="Hamza" />
      </>
    )
  }
}

export default App
