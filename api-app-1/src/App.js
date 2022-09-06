import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Users from './components/Users'
import './styles.css'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Register isLogin={true} />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
