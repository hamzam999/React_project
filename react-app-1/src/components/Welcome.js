import React from 'react'

class Welcome extends React.Component {
  render() {
    // console.log('props ', this.props, typeof this.props)

    return (
      <div>
        <h1>Hey ! {this.props.name}</h1>
        <h2>Welcome to Newton School.</h2>
        {/* arrow function everytime */}
      </div>
    )
  }
}

export default Welcome
