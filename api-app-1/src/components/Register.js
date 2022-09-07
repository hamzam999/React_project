import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext'
import '../styles.css'

function Register(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    console.log('User is', user)
    if (localStorage.getItem('demo-user')) {
      navigate('/users')
    }
  }, [])

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleUser = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('All Fields are required')
    } else {
      setError('')
      const body = {
        email: email,
        password: password,
      }
      //POSt Request
      fetch(
        props.isLogin
          ? 'https://reqres.in/api/login'
          : 'https://reqres.in/api/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // You need to stringify the body
          body: JSON.stringify(body),
        }
      )
        .then((res) => res.json())
        .then((response) => {
          console.log('Response is', response)
          if (response.error) {
            setError(response.error)
          } else {
            localStorage.setItem('demo-user', JSON.stringify(response))
            //Logic to redirect to the users page
            navigate('/users')
          }
        })
    }
  }

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column' }}
      onSubmit={handleUser}
    >
      <input
        placeholder="Email"
        className="inp"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        onChange={handlePasswordChange}
        value={password}
        className="inp"
        placeholder="Password"
        style={{ marginTop: 20 }}
      />
      {error ? <p style={{ color: 'red' }}>{error}</p> : null}
      <button className="inp" type="submit" style={{ marginTop: 20 }}>
        {props.isLogin ? 'Login' : 'Register'}
      </button>
    </form>
  )
}

export default Register
