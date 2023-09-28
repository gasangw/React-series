import { useState } from "react"
function App() {
 const [count, setCount] = useState(0)

 const clickHandler =()=> {
  setCount(count + 1)
 }
  return (
    <div className="grid mx-auto gap-3 h-[100vh] place-content-center align-middle">
       <p>Button has been clicked {count} times</p>
       <button onClick={clickHandler} className='text-white border border-gray-300 rounded-md p-3 hover:bg-green-400 hover:text-white w-fit mx-auto bg-black'>Click Me</button>
    </div>
  )
}

export default App
