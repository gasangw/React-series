import React from "react";
import uuid from "react-uuid";
export default function HandleClickEvents() {
    function clickHandler(){
        alert("Clicked")
    }
    const topNav = ["Home", "exercise 1", "exercise 2", "exercise 3", "exercise 4","exercise 5", "exercise 6", "exercise 7", "exercise 8", "exercise 9"]
  return (
    <div className="grid place-content-center my-auto h-[100vh]">
      <div className="flex gap-1">
        {topNav.map(element => {
          return (
            <ul key={uuid()}>
              <li className="underline pr-1 border-r-2 border-black">{element}</li>
            </ul>
          )
        })}
      </div>
          <button onClick={clickHandler} className=' w-fit mx-auto mt-3 border border-gray-300 rounded-md p-3 hover:bg-green-400 hover:text-white'>Click Me</button>
    </div>
  )
}
