import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Passenger() {
  const [passengers, setPassengers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.instantwebtools.net/v1/passenger/?page=1')
      .then((res) => res.json())
      .then((response) => {
        setPassengers(response)
        setLoading(false)
      })
  }, [])
  if (loading) {
    return <h1>Loading....</h1>
  }
  return (
    <>
      {passengers.map((passenger) => {
        return (
          <div style={{ display: 'flex', marginTop: 10 }}>
            <span>Total passengers: {passenger.totalPassengers}</span>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 20,
              }}
            >
              {/* <Link to={`/passengers/${passenger.id}`}>
                <div>{airline.name}</div>
              </Link> */}
              <div style={{ color: 'gray', fontSize: 10, marginTop: 10 }}>
                {passenger.data.trips}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Passenger
