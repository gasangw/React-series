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
import SubVans from './Components/Host/SubVans'
import SubVansDetails from './Components/Host/SubVansDetails'
import SubVansDetails2 from './Components/Host/SubVansDetails2'
import SubVansPhoto from './Components/Host/SubVansPhoto'
import SubVansPricing from './Components/Host/SubVansPricing'
import {Routes, Route, Outlet } from 'react-router-dom'

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
            <Route path="vans" element={<SubVans />} />
            <Route path="vans/:id" element={<SubVansDetails />}>
                <Route index element={<SubVansDetails2 />} />
                <Route path="price" element={<SubVansPricing/>} />
                <Route path="photo" element={<SubVansPhoto />} />
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>

        </Route>
      </Routes>
    </>
  )
}

export default App
