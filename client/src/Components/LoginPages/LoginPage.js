
import React, {useState,useContext} from 'react'
import axios from '../../Config/baseUrl'
import { useNavigate } from 'react-router-dom';
import {AuthLoginContext} from '../../Context/Context'
import jwt from "jwt-decode";


function LoginPage() {

    const navigate = useNavigate();
    const{setUser,setUserId}=useContext(AuthLoginContext)

    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [inavlidCred,setInvalidCred]=useState(false)
    const token =localStorage.getItem('token')
    console.log(token)
  



   const handleSubmit=async(e)=>{
    e.preventDefault()
  
  let response=await  axios({
      method:'post',
      url:'/admin/login',
      data:{
        email,password
      }
    })


console.log(response,"response at client side ",response.data.admin);
    let login=response.data.admin
    if(login){
       
      navigate('/adminHome'); 
      localStorage.setItem("token",response.data.token)
        
    } 
    else if(!login){
  setInvalidCred(true)
    }
  
   }




  return (
    <div className='grid h-screen' >
    <div className='bg-red-100  w-3/5 h-3/4 place-self-center shadow-lg rounded-2xl grid'>
 
    <div className=" place-self-center flex md:h-3/4  md:w-3/5 h-full w-full justify-center items-center bg-slate-100 shadow-xl">

<div className="w-full px-3 ">
  <form onSubmit={handleSubmit}>
    <div className="mb-5  ">
      <label
        for="name"
       className="mb-3  block text-base font-medium text-[#07074D]"
      >
      E-mail
      </label>
      <input
        type="email"
        name="name"
        id="name" 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
            setInvalidCred(false)
          }}
        placeholder="Email"
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
    Password
    <div className="mb-5 ">
      <label
        for="password"
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
        
      </label>
      <input
        type="password"
        name="name"
        id="name"
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
          setInvalidCred(false)
        }}
        placeholder="password"
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
    {inavlidCred && <label
         for="subject"
         className="mb-3 block text-base font-medium text-red-500">
         
  Invalid credentials please check your entries.
      </label>}

    
    <div className='flex justify-center '>
      <button
        class="rounded-md bg-blue-400 py-3 px-8 text-white  active:bg-blue-700"
      >
        Submit
      </button>
    </div>
  </form>
</div>
</div>







    </div></div>
  )
}

export default LoginPage