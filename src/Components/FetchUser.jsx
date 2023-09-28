import DisplayUsers from './DisplayUsers'
import React, {useState, useEffect} from 'react'

function FetchUser() {
    const [users, setUsers] = useState([])

    useEffect(()=>{
     const getUsers = async () => {
        const response = await fetch("https://random-data-api.com/api/users/random_user?size=10")
        const data = await response.json()
        setUsers(data)
    }
    getUsers()
    },[]) 

  console.log(users)
  return (
    <div className='grid place-content-center align-middle h-[100vh]'>
        <button className='w-fit text-2xl font-bold bg-red-700 text-white py-2 px-6 rounded-xl text-center'>Fetch Random</button>
        {users && users.map(user => {
            return (
                <div key={user.id}>
                    <DisplayUsers data={user}/>
                </div>
            )
        })}
    </div>
  )
}

export default FetchUser