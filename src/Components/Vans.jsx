import React from 'react'

function Vans() {
  return (
    <div className="bg-[#FFF7ED] text-[#161616] px-14">
       <h1 className="text-4xl font-bold py-5">Explore our van options</h1>
       <div className="flex space-x-4 text-[#4d4d4d]">
          <input type="button" name="Simple" value="Simple" className="bg-[#FFEAD0] border-none outline-none font-medium px-8 py-2 rounded-lg w-fit cursor-pointer" />
          <input type="button" name="Luxury" value="Luxury" className="bg-[#FFEAD0] border-none outline-none font-medium px-8 py-2 rounded-lg w-fit cursor-pointer" />
          <input type="button" name="Rugged" value="Rugged" className="bg-[#FFEAD0] border-none outline-none font-medium px-8 py-2 rounded-lg w-fit cursor-pointer" />
          <input type="button" name="Clear filters" value="Clear filters" className="border-none outline-none font-medium underline w-fit cursor-pointer" />
       </div>
    </div>
  )
}

export default Vans