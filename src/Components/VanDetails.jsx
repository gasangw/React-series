import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import './server'

function VanDetails() {
    const Id = useParams()
    const [currentVan, setCurrentVan] = useState({})
    useEffect(()=>{
       fetch(`/api/vans/${Id.id}`)
       .then(response => response.json())
       .then(data => setCurrentVan(data.vans))
    },[])
  const {imageUrl, name, price, description, type } = currentVan
  return (
    <div className="bg-[#FFF7ED] py-10">
       <div className='px-10 my-3'>
        <Link to="/vans" className='flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <p className='underline text-[#858585] text-base'>Back to all vans</p> 
         </Link>
       </div>
        <div className='grid gap-x-3 pt-4 w-4/5 place-content-center mx-auto'>
           <img src={imageUrl} alt={name} className='rounded-lg'/>

        <input
          type="button"
          name={type}
          value={type}
          style={{
            backgroundColor:
               type == "simple"
                ? "#E17654"
                : type == "rugged"
                ? "#115E59"
                : "#161616",
            }}
          className="bg-[#FFEAD0] my-4 text-white border-none outline-none font-medium px-8 py-2 rounded-lg w-fit cursor-pointer"
          />
          <h4 className="text-4xl font-bold pb-3">{name}</h4>
          <p className='text-base'>{description}</p>
          <div className="flex py-3">
              <p className="font-bold text-xl">${price}</p>
               <p>/day</p>
           </div>
           <Link to="/sold-van" className="py-3 flex justify-center items-center text-lg rounded-lg my-3 font-medium text-white bg-[#FF8C38] hover:bg-[#c38558]">Rent this van</Link>
        </div>
    </div>
  )
}

export default VanDetails