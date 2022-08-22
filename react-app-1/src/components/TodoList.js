import React from 'react'

const todos = [
  {
    relativeList: 'person one',
    
  },
  {
    
    relativeList: 'person two',
    
  },
  {
    
    relativeList: 'person three',
    
  },
]

class TodoList extends React.Component {
  render() {
    return (
      <>
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              <button
                onClick={() => {
                  this.props.deleteTodo(todo.id)
                }}
              >
                Delete
              </button>
              <button>Mark as Complete</button>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default TodoList
