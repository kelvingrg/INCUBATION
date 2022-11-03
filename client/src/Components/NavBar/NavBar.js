import React from 'react'
import { useContext } from 'react'
import {AuthLoginContext} from '../../Context/Context'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom';



function NavBar() {
  const {user,userId,setUser,setUserId}=useContext(AuthLoginContext)
  const navigate = useNavigate();
  console.log(user,userId);


  return (
   <div>
        <div className='w-full bg-black text-base h-6 '> </div>
    <div className='w-full bg-neutral-500 text-base h-12 flex md:justify-around justify-between'>
    <span ><h3 className='text-gray-50 p-2 cursor-auto'>Company Name</h3></span>
    <ul className=' hidden md:block  text-gray-50  p-2'>
    {user && <> <li className='inline-flex cursor-pointer' onClick={()=>{
      navigate('/apply')
    }}>Apply </li>
      <li className='inline-flex pl-5 cursor-pointer'  onClick={()=>{
              navigate('/viewStatus')
            }}  >View Status</li></>}
    </ul>
    {user? <div className='hidden md:inline   text-gray-50 m-2 cursor-auto'>{user} <div className='  text-gray-50 m-2 cursor-pointer inline' onClick={()=>{
      navigate('/login')
      localStorage.clear()
   

    }}> Logout</div> </div>:
   <div className="hidden md:block"> <button className='   text-gray-50 m-2' onClick={()=>{
      navigate('/login')
      
    }}>Login </button>
    <button className=' text-gray-50 m-2' onClick={()=>{
      navigate('/signup')
    }}>SignUp</button>
    
    </div>}
    <div className='md:hidden text-gray-50 p-2  z-20'>
  <Menu>
      <Menu.Button><i class="fa-solid fa-bars"></i><i class="fa-solid fa-circle-caret-right"></i></Menu.Button>
      <div className='bg-neutral-500'>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
          user? <button className= {{active} ? 'm-2  hover:bg-black':" m-2 cursor-pointer"}>{user}</button>:
            <button className= {{active} ? 'm-2  hover:bg-black cursor-pointer':" m-2 cursor-pointer"} onClick={()=>{
              navigate('/login')
            }}> Login</button>

          )}
        </Menu.Item><br></br>
       
       

       {user && <> <Menu.Item>
          {({ active }) => (
            <button
            className= {{active} ? ' m-2  hover:bg-black cursor-pointer':" m-2 cursor-pointer"}
             
            onClick={()=>{
              navigate('/viewStatus')
            }}     >
           View Status
            </button>
          )}
        </Menu.Item><br/> 

        <Menu.Item>
          {({ active }) => (
            <button
            className= {{active} ? ' m-2  hover:bg-black cursor-pointer':" m-2"} onClick={()=>{
              navigate('/apply')
            }} >
           Apply
            </button>
          )}
        </Menu.Item><br></br></>} 
        <Menu.Item>
          {({ active }) => (
          
         user?  <button
         className= {{active} ? ' m-2  hover:bg-black cursor-pointer':" m-2"}   onClick={()=>{
          navigate('/login')
          localStorage.clear()
          
    
        }}>
          
         Logout
         </button> :  <button className= {{active} ? 'm-2  hover:bg-black cursor-pointer':" m-2 cursor-pointer"} onClick={()=>{
              navigate('/signup')
            }}> SignUp</button>

          )}
        </Menu.Item><br></br>
        
       
       
        
       
      </Menu.Items>
      </div>
    </Menu>
    
    </div>




  </div>
 </div>
  )
}

export default NavBar