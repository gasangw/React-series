import React from 'react'
import { Link } from 'react-router-dom'

function SoldOut() {
  return (
    <div className='grid bg-[#FFF7ED] '>
      <div className='px-10 my-3'>
        <Link to="/vans" className='flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <p className='underline text-[#858585] text-base'>Back to all vans</p> 
        </Link>
       </div>
    <div className='flex items-center justify-center py-32 px-20'>
      <h1 className='text-[#161616] text-7xl font-extrabold'>Sorry!! <br />The van has been booked by someone else. Choose another van</h1>
    </div>
    </div>
  )
}

export default SoldOut