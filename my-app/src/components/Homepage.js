import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div>
      <h1>This is Homepage</h1>
      <Link to="/clock">
        <button>Clock</button>
      </Link>
      <Link to="/counter">
        <button>Counter</button>
      </Link>
      <Link to="/form">
        <button>Form</button>
      </Link>
      <Link to="/images">
        <button>Images</button>
      </Link>
      <Link to="/users">
        <button>Users</button>
      </Link>
    </div>
  )
}

export default Homepage
