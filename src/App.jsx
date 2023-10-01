import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path="/about" element={<Navbar />} />
      </Routes>
    </>
  )
}

export default App
