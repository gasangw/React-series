import { useState, useEffect} from 'react'
function SubVans() {
    const [hostVans, setHostVans] = useState([])

    useEffect(()=>{
      const getHostVans = async () => {
         const response = await fetch('/api/host/vans')
         const data = await response.json()
        setHostVans(data.vans)
      } 
      getHostVans()
    },[])
  return (
    <div className='grid px-14 gap-4 grid-cols-1 py-10 bg-[#FFF7ED]'>
      {
        hostVans && hostVans.map(van => {
          return (
            <div key={van.id} className='grid grid-cols-2 bg-white rounded-xl gap-4 p-4'>
               <div>
                  <img src={van.imageUrl} alt={van.name} className='rounded-lg w-1/4'/>
               </div>
               <div className='flex flex-col text-black -ml-[25rem]'>
                 <h2 className='font-bold text-xl'>{van.name}</h2>
                 <p className='font-medium text-lg'>${van.price}/day</p>
               </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default SubVans