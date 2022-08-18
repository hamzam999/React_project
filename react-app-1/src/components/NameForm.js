import React from 'react'

class NameForm extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
    }
  }

  render() {
    const handleFirstNameChange = (e) => {
      //e is an object
      //Get the input Value
      this.setState({
        firstName: e.target.value,
      })
    }

    const handleLastNameChange = (e) => {
      //e is an object
      //Get the input Value
      this.setState({
        lastName: e.target.value,
      })
    }

    return (
      <>
        <form>
          <input
            placeholder="First Name"
            value={this.state.firstName}
            onChange={handleFirstNameChange}
          ></input>
          <input
            placeholder="Last Name"
            value={this.state.lastNameName}
            onChange={handleLastNameChange}
          ></input>
        </form>
        <h3>
          Full Name is {this.state.firstName} {this.state.lastName}{' '}
        </h3>
      </>
    )
  }
}

export default NameForm
