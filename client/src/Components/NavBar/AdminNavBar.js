import React from 'react'
import { useContext } from 'react'
import {AuthLoginContext} from '../../Context/Context'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom';

function AdminNavBar() {
    const {admin,adminId}=useContext(AuthLoginContext)
    const navigate = useNavigate();
    const user=true
    const token =localStorage.getItem("token")
   
  return (
    <div>
    <div className='w-full bg-black text-base h-6 '> </div>
<div className='w-full bg-neutral-500 text-base h-12 flex justify-between md:justify-start pl-0 md:pl-20 '>
<span className='bg-orange-100 rounded-md py-1 border-r-green-500'><h3 className='text-green-500 font-bold font-serif p-2 cursor-auto'>ConVo</h3></span>


{token && <div className='md:hidden text-gray-50 p-2  z-20  '>
<Menu>
  <Menu.Button><i class="fa-solid fa-bars"></i><i class="fa-solid fa-circle-caret-right"></i></Menu.Button>
  <div className='bg-neutral-500'>
  <Menu.Items>
  <Menu.Item>
      {({ active }) => (
        <button
        className= {{active} ? ' m-2  hover:bg-black cursor-pointer':" m-2 cursor-pointer"}
         
        onClick={()=>{navigate('/adminHome')} }  >
      Approved List 
        </button>
      )}
    </Menu.Item><br/> 
    <Menu.Item>
      {({ active }) => (
        <button
        className= {{active} ? ' m-2  hover:bg-black cursor-pointer':" m-2 cursor-pointer"}
        onClick={()=>{navigate('/newApplication')} }  
        >
      New Application 
        </button>
      )}
    </Menu.Item><br/> 
    <Menu.Item>
      {({ active }) => (
        <button
        className= {{active} ? ' m-2  hover:bg-black cursor-pointer':" m-2 cursor-pointer"}
         
        onClick={()=>{navigate('/ProcessingList')} }>Processing AppList
        </button>
      )}
    </Menu.Item><br/> 
   
   

     <Menu.Item>
      {({ active }) => (
        <button
        className= {{active} ? ' m-2  hover:bg-black cursor-pointer':" m-2 cursor-pointer"}
        onClick={()=>{navigate('/BookSlots')} }>Booking Slots  
        </button>
      )}
    </Menu.Item><br/> 
    <Menu.Item>
      {({ active }) => (
      
     admin?  <button
     className= {{active} ? ' m-2  hover:bg-black cursor-pointer':" m-2"}>
      
     Logout
     </button> :  <button className= {{active} ? 'm-2  hover:bg-black cursor-pointer':" m-2 cursor-pointer"} onClick={()=>{
          navigate('/admin')
        }}> Login</button>

      )}
    </Menu.Item><br></br>
    
   
   
    
   
  </Menu.Items>
  </div>
</Menu>

</div>}
</div>
</div>
  )
}

export default AdminNavBar