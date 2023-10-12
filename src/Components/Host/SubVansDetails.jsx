import { useParams, NavLink, Outlet, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import activeStyle from "./ActiveStyle"

function SubVansDetails() {
  const [currentVan, setCurrentVan] = useState({})
  const { id } = useParams()

  useEffect(()=> {
    const getHostVanDetails = async ()=>{
      const response = await fetch(`/api/host/vans/${id}`)
      const data = await response.json()
      setCurrentVan(data.vans)
    }
    getHostVanDetails()
  }, [])
  return (
    <div className="grid py-10 px-16">
       <div className='my-3'>
        <Link to=".." relative="path" className='flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <p className='underline text-[#858585] text-base'>Back to all vans</p> 
         </Link>
       </div>
      <div className="bg-white rounded-2xl h-fit p-8">

      <div className="grid grid-cols-2">
         <div>
          <img src={currentVan.imageUrl} alt={currentVan.name} className="h-56 rounded-xl"/>
         </div>
         <div className="flex flex-col text-black -ml-[55%]">
         <button
            className="border-none outline-none font-medium px-8 py-2 rounded-lg w-fit text-white"
              style={{
                    backgroundColor:
                      currentVan.type == "simple"
                        ? "#E17654"
                        : currentVan.type == "rugged"
                        ? "#115E59"
                        : "#161616",
                  }}
                >
                  {currentVan.type}
                </button>
           <p className="font-bold text-xl">{currentVan.name}</p>
           <p className="font-medium text-lg">${currentVan.price}/pay</p>
         </div>
       <div className="mt-5">
       <nav className='flex gap-3 font-semibold pl-12 text-gray-400'>
           <NavLink 
           to='.' 
           end
           className="hover:font-bold hover:underline"
           style={({isActive})=> isActive ? activeStyle : null}
           >
            Details
          </NavLink>
           <NavLink 
           to='price' 
           className="hover:font-bold hover:underline"
           style={({isActive})=> isActive ? activeStyle : null}
           >
            Pricing
          </NavLink>
          <NavLink 
           to='photo' 
           className="hover:font-bold hover:underline"
           style={({isActive})=> isActive ? activeStyle : null}
           >
            Photo
          </NavLink>
       </nav>
       </div>
      </div>
       <Outlet context={[currentVan]}/>
     </div>
    </div>
  )
}

export default SubVansDetails