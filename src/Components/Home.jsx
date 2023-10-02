import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImg from '../assets/image2.jpg'

function Home() {
  return (
    <div className="text-white flex flex-col items-center justify-center px-6 bg-no-repeat bg-cover h-[90vh]" style={{backgroundImage: `url(${backgroundImg})`}}>
       <div className='w-2/3'>
         <h1 className="text-6xl font-bold">You got the travel plans, we got the travel vans.</h1>
         <p className="py-8 text-xl">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
         <Link to="/vans" className="py-3 flex justify-center items-center text-lg rounded-lg font-medium text-white bg-[#FF8C38] hover:bg-[#c38558]">Find your van</Link>
       </div>
    </div>
  )
}

export default Home