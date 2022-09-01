import './App.css'
import Counter from './components/Counter'
import Form from './components/Form'
import Clock from './components/Clock'
import Images from './components/Images'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Counter />
      <br></br>
      <Form />
      <br></br>
      <Clock />
      <br></br>
      <Images />
    </div>
  )
}

export default App
