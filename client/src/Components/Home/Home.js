import React from 'react'
import LoginPage from '../LoginPage/LoginPage'
import SignUp from '../SignUp/SignUp'
import VewStatus from '../VewStatus/VewStatus'

function Home(props) {
  return (

    <div className=" grid bg-no-repeat bg-cover h-screen w-full bg-[url('https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')]"  >
      { props.slogan &&  <h1 className='self-center m-20 font-bold tracking-wide text-justify text-5xl font-serif	'>{props.slogan}</h1>}
      {props.loginpage &&   <div className=''>  {<LoginPage/>}</div>}
      {props.signup &&   <div className=''>  {<SignUp/>}</div>}
     { props.viewstatus && <div>{<VewStatus/>}</div>}
    </div>
  )
}

export default Home