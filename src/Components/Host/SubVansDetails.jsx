import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

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
  console.log(currentVan)

  return (
    <div className="grid h-[100vh] py-10 px-16">
      <div className="grid grid-cols-2 bg-white rounded-2xl h-fit p-8">
         <div>
          <img src={currentVan.imageUrl} alt={currentVan.name} className="h-56 rounded-xl"/>
         </div>
         <div className="flex flex-col text-black -ml-[55%]">
           <p className="font-bold text-xl">{currentVan.name}</p>
           <p className="font-medium text-lg">${currentVan.price}/pay</p>
         </div>
      </div>
    </div>
  )
}

export default SubVansDetails