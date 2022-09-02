import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Clock from './components/Clock'
import Counter from './components/Counter'
import Form from './components/Form'
import Images from './components/Images'
import PageNotFound from './components/PageNotFound'
import Users from './components/User'
import UserDetails from './components/UserDetails'
import Homepage from './components/Homepage'

function App() {
  const users = [
    {
      id: 1,
      name: 'Vanshu',
    },
    {
      id: 2,
      name: 'Pawan',
    },
    {
      id: 3,
      name: 'Kartik',
    },
    {
      id: 4,
      name: 'Hamza',
    },
  ]

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/clock" element={<Clock />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/images" element={<Images />}></Route>
          <Route path="/users" element={<Users users={users} />}></Route>
          {/* Dynamic route */}
          <Route
            path="/users/:userId"
            element={<UserDetails users={users} />}
          ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
