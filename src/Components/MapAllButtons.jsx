import React from 'react'
import DisplayButtons from './ListButtons'
import BUTTON_CONTENTS from './ButtonData'

function MyButton() {
  return (
    <div className='flex gap-4 justify-center items-center my-auto h-[100vh]'>
       { BUTTON_CONTENTS.map((eachButton)=> {
        return (
            <div key={eachButton.id}>
                <DisplayButtons data={eachButton}/>
            </div>
        )
       })} 
    </div>
  )
}

export default MyButton