import React from 'react'

export default function HandleClickEvents() {
    const clickHandler =()=>{
        alert("Clicked")
    }
  return (
    <div className='grid place-content-center my-auto h-[100vh]'>
        <button onClick={clickHandler} className='border border-gray-300 rounded-md p-3 hover:bg-green-400 hover:text-white'>Click Me</button>
    </div>
  )
}
