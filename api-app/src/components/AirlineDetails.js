import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles.css'

function AirlineDetails() {
  const [details, setDetails] = useState({})
  const [loading, setLoading] = useState(false)
  const params = useParams()
  const url = `https://api.instantwebtools.net/v1/airlines/${params.airlineId}`
  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((resp) => resp.json())
      .then((response) => {
        setDetails(response)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div className="airline-details">
      <h1>{details.name}</h1>
      <img src={details.logo} alt="logo" className="airline-logo" />
      <div>Slogan:{details.slogan}</div>
      <div>Established in:{details.established}</div>
      <div>
        Website:
        <a href={details.website} target="_blank">
          {details.website}
        </a>
      </div>
    </div>
  )
}

export default AirlineDetails
