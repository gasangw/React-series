import React from 'react'

function DisplayList({animal}) {
  return (
    <ul>
      <li className='text-base font-semibold font-sans list-disc'>{animal}</li>
    </ul>
  )
}

export default DisplayList