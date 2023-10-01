import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-[#FFF7ED] flex justify-between px-16 py-8'>
        <div>
           <NavLink to='/' className='text-black font-bold hover:font-bold hover:underline'>#VANLIFE</NavLink>
        </div>
        <nav className='flex gap-3'>
           <NavLink to='/' className="hover:font-bold hover:underline">Home</NavLink>
           <NavLink to='/about' className="hover:font-bold hover:underline">About</NavLink>
           <NavLink to='/vans' className="hover:font-bold hover:underline">Vans</NavLink>
        </nav>
    </div>
  )
}

export default Navbar