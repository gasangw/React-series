import React, {useState} from "react";

function FormData() {
    const [names, setNames] = useState({
        firstName: '',
        lastName: ''
    })

    const handleInputValue =(e)=>{
        const { name, value} = e.target
        setNames(prevState => {
          return {
            ...prevState,
            [name]: value
          }
        })
    }

    const handleSubmit =()=> {
        alert(`Hello ${names.firstName} ${names.lastName}!`)
    }
  return (
    <div className="grid justify-center align-middle mt-32">
      <form className="grid space-y-5 w-fit">
        <input
          type="text"
          placeholder="First name"
          onChange={handleInputValue}
          name="firstName"
          value={names.firstName}
          className="px-3 py-2 rounded-md border border-gray-400 "
        />
        <input
          type="text"
          placeholder="Last name"
          onChange={handleInputValue}
          name="lastName"
          value={names.lastName}
          className="px-3 py-2 rounded-md border border-gray-400"
        />
        <button onClick={handleSubmit} type="submit" className="bg-red-600 text-white font-bold tetx-xl py-2 px-4 rounded-xl">
          GREET ME
        </button>
      </form>
    </div>
  );
}

export default FormData;
