import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <>
      <h1>This is Homepage</h1>
      <Link to="/airlines">
        <button>Take me to the app</button>
      </Link>
    </>
  )
}

export default Homepage
