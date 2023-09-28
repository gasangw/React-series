import React from 'react'

function DisplayButtons(props) {
  console.log(props.data)
    const { id, button} = props.data

    const hanldeClick =(e)=>{
        alert(`Button ${e.currentTarget.id} was clicked`)
    }
  return (
    <div className='flex gap-3 items-center my-auto'>
       <button id={id} className='border border-gray-300 rounded-md p-3 hover:bg-green-400 hover:text-white' onClick={hanldeClick}>{button}</button>
    </div>
  )
}

export default DisplayButtons