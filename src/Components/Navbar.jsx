import { NavLink } from 'react-router-dom'

function Navbar() {
    const activeStyle ={
      fontWeight: "bold",
      textDecoration: "underline",
      color: 'green',
      fontSize: 17,
    }
  return (
    <div className='bg-[#FFF7ED] flex justify-between px-16 py-8'>
        <div>
           <NavLink to='/' className='text-black font-bold'>#VANLIFE</NavLink>
        </div>
        <nav className='flex gap-3'>
           <NavLink 
           to='/host' 
           className="hover:font-bold hover:underline"
           style={({isActive}) => isActive ? activeStyle : null}
           >Host
          </NavLink>
           <NavLink 
           to='/about' 
           className="hover:font-bold hover:underline"
           style={({isActive})=> isActive ? activeStyle : null}
           >About
          </NavLink>
           <NavLink 
           to='/vans' 
           className="hover:font-bold hover:underline"
           style={({isActive})=> isActive ? activeStyle : null}
           >Vans
          </NavLink>
        </nav>
    </div>
  )
}

export default Navbar