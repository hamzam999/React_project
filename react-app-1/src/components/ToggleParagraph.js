import React from 'react'

class ToggleParagrah extends React.Component {
  constructor() {
    super()
    this.state = {
      showParagraph: true,
    }
  }
  render() {
    const toggleParagraph = () => {
      this.setState({
        showParagraph: !this.state.showParagraph,
      })
    }
    return (
      <>
        {/* conditional rendering */}
        {this.state.showParagraph ? <p>This is a Paragraph</p> : null}
        <button onClick={toggleParagraph}>
          {this.state.showParagraph ? 'Hide' : 'Show'} Paragraph
        </button>
      </>
    )
  }
}
export default ToggleParagrah
