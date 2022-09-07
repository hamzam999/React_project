import { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  UNSAFE_RouteContext,
} from 'react-router-dom'
import Register from './components/Register'
import Users from './components/Users'
import UserContext from './context/UserContext'
import Flex from './components/Flex'
import './styles.css'

export default function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <BrowserRouter>
          <Flex>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
          </Flex>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Register isLogin={true} />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  )
}
