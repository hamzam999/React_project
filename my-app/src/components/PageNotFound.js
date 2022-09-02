import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  let val = 'Page not found!!'

  return (
    <div className="App">
      <h1>{val}</h1>
      <br></br>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  )
}
export default PageNotFound
