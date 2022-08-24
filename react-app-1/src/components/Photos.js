import React from 'react'

class Photos extends React.Component {
  constructor() {
    super()
    this.state = {
      photos: [],
      loading: false,
      filteredPhotos:[],
      searchValue:""
    }
  }
  componentDidMount() {
    this.setState({
      loading: true,
    })
    fetch('https://jsonplaceholder.typicode.com/photos').then((resp) =>
      resp.json().then((response) => {
        this.setState({
          photos: response,
          filteredPhotos: response,
          loading: false,
        })
      })
    )
  }
  render() {
    const searchItem = (e) => {
      this.setState({
        searchValue: e.target.value,
      })
      const matchingItems = this.state.photos.filter((photo) => {
        return photo.title.includes(e.target.value)
      })
      this.setState({
        filteredPhotos: matchingItems,
      })
    }

    if (this.state.loading) {
      return <h1>Loading...</h1>
    }
    return (
      <>
        <input
          placeholder="Search"
          value={this.state.searchValue}
          onChange={searchItem}
        />
        {this.state.filteredPhotos.map((photo) => {
          return (
            <div key={photo.id}>
              <img src={photo.url} height={100} width={100} />
              <div>{photo.title}</div>
            </div>
          )
        })}
      </>
    )
  }
}

export default Photos
