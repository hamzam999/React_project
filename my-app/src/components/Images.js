import React, { useEffect, useState } from 'react'

function Images() {
  const [photos, setPhotos] = useState([])
  const [filteredPhotos, setFilteredPhotos] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(function () {
    setLoading(true)
    //Api call
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((resp) => resp.json())
      .then((response) => {
        setLoading(false)
        console.log('Response is', response)
        setPhotos(response)
        setFilteredPhotos(response)
      })
  }, [])

  useEffect(() => {
    if (searchValue) {
      const matchingPhotos = photos.filter((photo) => {
        return photo.title.includes(searchValue)
      })

      setFilteredPhotos(matchingPhotos)
    } else {
      setFilteredPhotos(photos)
    }
  }, [searchValue])

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
    //As soon as there is a change in searchValue
    // run a logic to search from the products
  }

  if (loading) {
    return <h1>Loading....</h1>
  }

  return (
    <>
      <input
        placeholder="Search Product"
        value={searchValue}
        onChange={handleSearchChange}
      />
      {filteredPhotos.map((photo) => {
        return (
          <div key={photo.id} style={{ marginTop: 10 }}>
            <img src={photo.url} style={{ height: 100, width: 100 }} />
            <p>{photo.title}</p>
          </div>
        )
      })}
    </>
  )
}

export default Images
