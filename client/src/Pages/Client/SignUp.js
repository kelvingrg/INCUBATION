import React from 'react'
import Home from '../../Components/Home/Home'
import NavBar from '../../Components/NavBar/NavBar'
import SignUp from '../../Components/SignUp/SignUp'

function SignUpPage() {
  return (
    <div>
      <NavBar></NavBar>
      <Home signup={true}/>
      </div>
  )
}

export default SignUpPage