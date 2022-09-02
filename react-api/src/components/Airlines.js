import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Airlines() {
  const [airlines, setAirlines] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.instantwebtools.net/v1/airlines')
      .then((res) => res.json())
      .then((response) => {
        setAirlines(response)
        setLoading(false)
      })
  }, [])
  if (loading) {
    return <h1>Loading....</h1>
  }
  return (
    <>
      {airlines.map((airline) => {
        return (
          <div style={{ display: 'flex', marginTop: 10 }}>
            <img
              src={airline.logo}
              alt="logo"
              style={{ height: 60, width: 60, borderRadius: '50%' }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 20,
              }}
            >
              <Link to={`/airlines/${airline.id}`}>
                <div>{airline.name}</div>
              </Link>
              <div style={{ color: 'gray', fontSize: 10, marginTop: 10 }}>
                {airline.slogan}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Airlines
