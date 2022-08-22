import React from 'react'

class EventHandlerTwo extends React.Component {
  constructor() {
    super()
    this.state = {
      btnid: '',
    }
  }

  render() {
    const handleClick = (e) => {
      this.setState({
        btnid: e.currentTarget.id,
      })
      console.log('Button id is:-', this.state.btnid)
    }

    // do not remove the two buttons or change their id
    return (
      <div id="main">
        <button id="button-a" onClick={handleClick}>
          Button A
        </button>
        <button id="button-b" onClick={handleClick}>
          Button B
        </button>
        <br></br>
        <p>Button id is:- {this.state.btnid}</p>
      </div>
    )
  }
}

export default EventHandlerTwo
