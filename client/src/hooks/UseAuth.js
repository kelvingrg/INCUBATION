import React,{useContext} from 'react'
import { useLocation,Navigate,Outlet } from 'react-router-dom'
import { AuthLoginContext } from '../Context/Context'



function UseAuth() {
  const {user,setUser,userId,setUserId}=useContext(AuthLoginContext)
  const token =localStorage.getItem('userToken')
  if(token){

    const user=localStorage.getItem('user')
    const userId=localStorage.getItem('userId')
    setUser(user)
    setUserId(userId)

  
  }

  return (

 token
  ?<Outlet/>
  :<Navigate to="/login" />
  )
}

export default UseAuth