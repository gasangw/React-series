import React from 'react'


function CalculatorLayout() {
  return (
    <div className='grid mt-12'>
       <div className='grid bg-slate-200 mx-auto w-2/5 h-96 border border-red-500'>
          <button className='text-xl font-semibold bg-gray-400 py-2'>1</button>
          <div className='grid grid-cols-4'>
          <input
                type="button"
                value="AC"
                className="button-clear"
            />
            <input
                type="button"
                value="+/-"
                className="button-operator"
            />
            <input
                type="button"
                value="%"
                className="button-operator"
            />
            <input
                type="button"
                value="&#247;"
                className="button-operator"
                id="red"
            />
            <input
                type="button"
                value="7"
                className="button-operator"
            />
            <input
                type="button"
                value="8"
                className="button-operator"
            />
            <input
                type="button"
                value="9"
                className="button-operator"
            />
            <input
                type="button"
                value="x"
                className="button-operator"
                id="red"
            />
            <input
                type="button"
                value="4"
                className="button-operator"
            />
            <input
                type="button"
                value="5"
                className="button-operator"
            />
            <input
                type="button"
                value="6"
                className="button-operator"
            />
            <input
                type="button"
                value="-"
                className="button-operator"
                id="red"
            />
            <input
                type="button"
                value="1"
                className="button-operator"
            />
            <input
                type="button"
                value="2"
                className="button-operator"
            />
            <input
                type="button"
                value="3"
                className="button-operator"
            />
            <input
                type="button"
                value="+"
                className="button-operator"
                id="red"
            />

            <input
                type="button"
                value="0"
                className="button-operator"
            />
            <input
                type="button"
                value="."
                className="button-operator"
            />
            <input
                type="button"
                value="="
                className="button-operator"
                id="red"
            />
          </div>
       </div>
    </div>
  )
}

export default CalculatorLayout