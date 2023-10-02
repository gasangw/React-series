import Navbar from './Components/Navbar'
import About from './Components/About'
import Vans from './Components/Vans'
import Home from './Components/Home'
import AllVans from './Components/AllVans'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/all-vans" element={<AllVans />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
