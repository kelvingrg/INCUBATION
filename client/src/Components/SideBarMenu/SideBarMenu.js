import React from 'react'
import AdminHome from '../../Pages/Admin/AdminHome'
import { useNavigate } from 'react-router-dom'

function SideBarMenu() {
  const navigate =useNavigate()
  return (
 

    <div className='md:col-start-1 md:col-end-3 hidden md:block   bg-neutral-500 '> 
<div className='divide-y divide-slate-200 text-white'>
<div className='border-white hover:bg-black h-16 grid  justify-items-center place-items-center' onClick={()=>{navigate('/adminHome')} }>Approved List      </div>
<div className='border-white hover:bg-black h-16 grid  justify-items-center place-items-center' onClick={()=>{navigate('/newApplication')} }>New Application   </div>
<div className='border-white hover:bg-black h-16 grid  justify-items-center place-items-center' onClick={()=>{navigate('/ProcessingList')} }>Processing AppList </div>
<div className='border-white hover:bg-black h-16 grid  justify-items-center place-items-center' onClick={()=>{navigate('/BookSlots')} }>Booking Slots        </div>
<div className='border-white hover:bg-black h-16 grid  justify-items-center place-items-center' onClick={()=>{} }>Schedue events          </div>
<div className='border-white hover:bg-black h-16 grid  justify-items-center place-items-center' onClick={()=>{} }>Videos       </div>
<div className='border-white hover:bg-black h-16 grid  justify-items-center place-items-center' onClick={()=>{} }>Paymets          </div>
<div className='border-white hover:bg-black h-16 grid  justify-items-center place-items-center' onClick={()=>{localStorage.clear(); navigate('/admin')} }>Logout  </div>


</div>

</div>
    


   
   
  
  )
}

export default SideBarMenu