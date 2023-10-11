import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"
function HostLayout() {
  const activeStyle = {
    fontSize: 16,
    color: "green",
    textDecoration: "underline"
  }
  return (
    <div className="bg-[#FFF7ED]">
        <nav className='flex gap-3 pt-6 font-semibold pl-16 text-gray-400'>
           <NavLink 
           to='/host' 
           end
           className="hover:font-bold hover:underline"
           style={({isActive})=> isActive ? activeStyle : null}
           >
            Dashboard
          </NavLink>
           <NavLink 
           to='/host/income' 
           className="hover:font-bold hover:underline"
           style={({isActive})=> isActive ? activeStyle : null}
           >
            Income
          </NavLink>
          <NavLink 
           to='/host/vans' 
           className="hover:font-bold hover:underline"
           style={({isActive})=> isActive ? activeStyle : null}
           >
            Vans
          </NavLink>
           <NavLink 
           to='/host/reviews' 
           className="hover:font-bold hover:underline"
           style={({isActive})=> isActive ? activeStyle : null}
           >
            Reviews
          </NavLink>
        </nav>
       <Outlet />
    </div>
  )
}

export default HostLayout