import React from 'react'

function DisplayJokes(props) {
    const { setup, punchline} = props.joke
  return (
    <div className='bg-white rounded-lg px-3 py-2 text-center w-3/5'>
        <h2 className='font-bold text-2xl'>{setup}</h2>
        <p className='text-base font-normal pt-3'>{punchline}</p>
    </div>
  )
}

export default DisplayJokes