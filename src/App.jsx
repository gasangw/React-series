import Navbar from './Components/Navbar'
import About from './Components/About'
import Vans from './Components/Vans'
import Home from './Components/Home'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </>
  )
}

export default App
