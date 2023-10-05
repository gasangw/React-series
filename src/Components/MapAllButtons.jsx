import DisplayButtons from './ListButtons'
import BUTTON_CONTENTS from './ButtonData'
import { v4 as uuid_v4 } from "uuid";

function MyButton() {
  const topNav = ["Home", "exercise 1", "exercise 2", "exercise 3", "exercise 4","exercise 5", "exercise 6", "exercise 7", "exercise 8", "exercise 9"]
 
  return (
<div className='grid'>
  <div className='flex mx-auto mt-16'>
    {topNav.map(element => {
      return (
      <ul key={uuid_v4()}>
          <li className="underline pr-1 border-r-2 border-black">{element}</li>
      </ul>
    )})}
    </div>
    <div className='flex gap-4 justify-center items-center my-auto h-[100vh]'>
        { BUTTON_CONTENTS.map((eachButton)=> {
          return (
              <div key={eachButton.id}>
                  <DisplayButtons data={eachButton}/>
              </div>
          )
        })} 
      </div>
</div>
  )
}

export default MyButton