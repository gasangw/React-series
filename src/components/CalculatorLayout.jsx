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
            />
            <input
                type="button"
                value="+/-"
            />
            <input
                type="button"
                value="%"
            />
            <input
                type="button"
                value="&#247;"
                className="bg-orange-500 text-white"
            />
            <input
                type="button"
                value="7"
            />
            <input
                type="button"
                value="8"
            />
            <input
                type="button"
                value="9"
            />
            <input
                type="button"
                value="x"
                className="bg-orange-500 text-white"
            />
            <input
                type="button"
                value="4"
            />
            <input
                type="button"
                value="5"
            />
            <input
                type="button"
                value="6"
            />
            <input
                type="button"
                value="-"
                className="bg-orange-500 text-white"
            />
            <input
                type="button"
                value="1"
            />
            <input
                type="button"
                value="2"
            />
            <input
                type="button"
                value="3"
            />
            <input
                type="button"
                value="+"
                className="bg-orange-500 text-white"
            />

            <input
                type="button"
                value="0"
                className='grid col-span-2'
            />
            <input
                type="button"
                value="."
            />
            <input
                type="button"
                value="="
                className="bg-orange-500 text-white"
            />
          </div>
       </div>
    </div>
  )
}

export default CalculatorLayout