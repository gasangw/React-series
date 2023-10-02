import Navbar from './Components/Navbar'
import About from './Components/About'
import Vans from './Components/Vans'
import Home from './Components/Home'
import VanDetails from './Components/VanDetails'
import PageNotFound from './Components/PageNotFound'
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
        <Route path="/vans-details/:id" element={<VanDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
