import React from 'react'

class TodoInput extends React.Component {
  constructor() {
    super()
    this.state = {
      todo: '',
    }
  }

  render() {
    const updateTodo = (e) => {
      this.setState({
        todo: e.target.value,
      })
    }
    return (
      <form>
        <input
          placeholder="Enter the task"
          value={this.state.todo}
          onChange={updateTodo}
        ></input>
        <button type="submit">Add Item</button>
      </form>
    )
  }
}

export default TodoInput
