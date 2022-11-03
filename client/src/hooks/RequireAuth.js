import React,{useContext} from 'react'
import { useLocation,Navigate,Outlet } from 'react-router-dom'
import { AuthContext } from '../Context/Context';


function RequireAuth() {
  const token =localStorage.getItem('token')
  return (

 token
  ?<Outlet/>
  :<Navigate to="/admin" />
  )
}

export default RequireAuth