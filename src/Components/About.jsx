import React from 'react'
import { Link } from 'react-router-dom'
import myImage from '../assets/image1.jpg'

function About() {
  return (
    <div className="grid bg-[#FFF7ED]">
       <div>
          <img src={myImage}  alt='person seated on top of a car'/>
       </div>
       <div className='grid px-6 text-[#161616] w-2/4 mx-auto py-10'>
         <h3 className='font-sans text-4xl font-bold py-6'>Don’t squeeze in a sedan when you could relax in a van.</h3>
         <p className="pb-5 text-xl">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
         <p className="text-xl">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
         <div className="bg-[#FFCC8D] rounded-lg px-4 text-[#161616] h-40 mt-5">
            <p className="text-xl font-bold py-6">Your destination is waiting.<br /> Your van is ready.</p>
            <Link to="/vans" className="bg-[#161616] text-white py-3 px-5 rounded-md font-medium">Explore our vans</Link>
         </div>
       </div>
    </div>
  )
}

export default About