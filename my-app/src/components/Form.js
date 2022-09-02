import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Form() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault()
    if (name && password) {
      setFormSubmitted(true)
    }
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <input placeholder="Name" value={name} onChange={handleNameChange} />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Submit Form</button>
      </form>
      {formSubmitted ? <h1>Hey, your name is {name}</h1> : null}
      <br></br>
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  )
}

export default Form
//1. Define the state variable
//2. Assign the state variable
//3. A method to change the state
