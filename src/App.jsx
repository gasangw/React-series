import About from './Components/About'
import Vans from './Components/Vans'
import Home from './Components/Home'
import VanDetails from './Components/VanDetails'
import PageNotFound from './Components/PageNotFound'
import SoldOut from './Components/SoldOut'
import Layout from './Components/Layout'
import Dashboard from './Components/Host/Dashboard'
import Income from './Components/Host/Income'
import Reviews from './Components/Host/Reviews'
import HostLayout from './Components/Host/HostLayout'
import {Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans-details/:id" element={<VanDetails />} />
          <Route path="sold-van" element={<SoldOut />} />
          <Route path="*" element={<PageNotFound />} />

          <Route path="/host" element={<HostLayout/>}>
            <Route index element={< Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

        </Route>
      </Routes>
    </>
  )
}

export default App
