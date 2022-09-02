import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Clock() {
  const [date, setDate] = useState(new Date())

  function updateTimer() {
    setDate(new Date())
  }

  useEffect(function () {
    //The first argument of useEffect is
    // a function
    console.log('Component Did Mount')
    const timerId = setInterval(updateTimer, 1000)

    return function () {
      console.log('Component Will unmount')
      clearInterval(timerId, updateTimer)
    }
  }, [])

  //You can give the name of variables in the array

  //If the particular variable changes, then
  //only execute this useEffect
  //Second Argument is depency array
  return (
    <div>
      <h1>
        {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
      </h1>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  )
}

export default Clock

//componentDidMount(){}

// 1. A state variable to store the current Date
//2. We need to update the date varibale every second
