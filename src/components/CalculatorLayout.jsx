import React from 'react'


function CalculatorLayout() {
  return (
    <div className='grid mt-12'>
       <div className='grid bg-slate-200 mx-auto w-2/5 h-96'>
          <button className='text-xl font-semibold bg-gray-400 py-2'>1</button>
          <div className='grid grid-cols-4'>
          <input
                type="button"
                value="AC"
                onChange={clickHandler}
            />
            <input
                type="button"
                value="+/-"
                onChange={clickHandler}
            />
            <input
                type="button"
                value="%"
                onChange={clickHandler}
            />
            <input
                type="button"
                value="&#247;"
                className="bg-orange-500 text-white"
                onChange={clickHandler}
            />
            <input
                type="button"
                value="7"
                onChange={clickHandler}
            />
            <input
                type="button"
                value="8"
                onChange={clickHandler}
            />
            <input
                type="button"
                value="9"
                onChange={clickHandler}
            />
            <input
                type="button"
                value="x"
                className="bg-orange-500 text-white"
                onChange={clickHandler}
            />
            <input
                type="button"
                value="4"
                onChange={clickHandler}
            />
            <input
                type="button"
                value="5"
                onChange={clickHandler}
            />
            <input
                type="button"
                value="6"
                onChange={clickHandler}
            />
            <input
                type="button"
                value="-"
                className="bg-orange-500 text-white"
                onChange={clickHandler}
            />
            <input
                type="button"
                value="1"
                onChange={clickHandler}
            />
            <input
                type="button"
                value="2"
                onChange={clickHandler}
            />
            <input
                type="button"
                value="3"
                onChange={clickHandler}
            />
            <input
                type="button"
                value="+"
                className="bg-orange-500 text-white"
                onChange={clickHandler}
            />

            <input
                type="button"
                value="0"
                className='grid col-span-2'
                onChange={clickHandler}
            />
            <input
                type="button"
                value="."
                onChange={clickHandler}
            />
            <input
                type="button"
                value="="
                className="bg-orange-500 text-white"
                onChange={clickHandler}
            />
          </div>
       </div>
    </div>
  )
}

export default CalculatorLayout