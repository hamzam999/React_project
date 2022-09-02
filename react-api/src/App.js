import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AirlineDetails from './components/AirlineDetails'
import Airlines from './components/Airlines'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Passenger from './components/Passenger'
import './styles.css'

export default function App() {
  return (
    <BrowserRouter>
      {/* If you want to show a content common to all pages then 
    place the component outside the routes */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/airlines" element={<Airlines />}></Route>
        <Route path="/airlines/:airlineId" element={<AirlineDetails />}></Route>
        <Route path="/passengers" element={<Passenger />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
