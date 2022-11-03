import React from 'react'
import Home from '../../Components/Home/Home'

import LoginPage from '../../Components/LoginPage/LoginPage'
import NavBar from '../../Components/NavBar/NavBar'

function Login() {
  return (
    <> 
      <NavBar/>
    <Home loginpage={true}/>
    
    </>

  )
}

export default Login