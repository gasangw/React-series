import React, {useState} from 'react'
import calculate from './Calculator'

function CalculatorLayout() {
    const [count, setCount] = useState(0)
    const clickHandler = (e)=>{
      const buttonName = e.target.value
      setCount((prevState) => calculate(prevState, buttonName))
    }
  return (
    <div className='grid mt-12'>
       <div className='grid bg-slate-200 mx-auto w-2/5 h-96'>
          <button className='text-xl font-semibold bg-gray-400 py-2'>{count.total}{count.operate}{count.next}</button>
          <div className='grid grid-cols-4'>
          <input
                type="button"
                value="AC"
                onClick={clickHandler}
                />
            <input
                type="button"
                value="+/-"
                onClick={clickHandler}
                />
            <input
                type="button"
                value="%"
                onClick={clickHandler}
                />
            <input
                type="button"
                value="&#247;"
                className="bg-orange-500 text-white"
                onClick={clickHandler}
                />
            <input
                type="button"
                value="7"
                onClick={clickHandler}
                />
            <input
                type="button"
                value="8"
                onClick={clickHandler}
                />
            <input
                type="button"
                value="9"
                onClick={clickHandler}
                />
            <input
                type="button"
                value="x"
                className="bg-orange-500 text-white"
                onClick={clickHandler}
                />
            <input
                type="button"
                value="4"
                onClick={clickHandler}
                />
            <input
                type="button"
                value="5"
                onClick={clickHandler}
                />
            <input
                type="button"
                value="6"
                onClick={clickHandler}
                />
            <input
                type="button"
                value="-"
                className="bg-orange-500 text-white"
                onClick={clickHandler}
                />
            <input
                type="button"
                value="1"
                onClick={clickHandler}
                />
            <input
                type="button"
                value="2"
                onClick={clickHandler}
                />
            <input
                type="button"
                value="3"
                onClick={clickHandler}
                />
            <input
                type="button"
                value="+"
                className="bg-orange-500 text-white"
                onClick={clickHandler}
                />

            <input
                type="button"
                value="0"
                className='grid col-span-2'
                onClick={clickHandler}
                />
            <input
                type="button"
                value="."
                onClick={clickHandler}
                />
            <input
                type="button"
                value="="
                className="bg-orange-500 text-white"
                onClick={clickHandler}
                />
          </div>
       </div>
    </div>
  )
}

export default CalculatorLayout