import React from 'react'

const todos = [
  {
    id: 1,
    title: 'Hit The Gym',
    completed: false,
  },
  {
    id: 2,
    title: 'Clean Your Room',
    completed: false,
  },
  {
    id: 3,
    title: 'Complete Your Homework',
    completed: false,
  },
]

class TodoList extends React.Component {
  render() {
    return (
      <>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}{' '}
        </ul>
      </>
    )
  }
}

export default TodoList
