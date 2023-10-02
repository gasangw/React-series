import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

function VanDetails() {
    const Id = useParams()
    console.log(Id.id)
  return (
    <div className="bg-[#FFF7ED]">
       <div className='flex gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
         <Link to="/vans" className='underline text-[#858585] text-base'>Back to all vans</Link> 
       </div>
    </div>
  )
}

export default VanDetails