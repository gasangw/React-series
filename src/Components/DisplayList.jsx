import React from 'react'

function DisplayList({animal}) {
  return (
    <ul>
       <li className='text-base list-disc'>{animal}</li>
    </ul>
  )
}

export default DisplayList