import axios from '../../Config/baseUrl'
import React, {useEffect, useContext,useState} from 'react'
import {viewAppContext} from '../../Context/Context'
import { useLocation } from "react-router-dom"; 



function Slots() {
 

   const {slots,setSlotsData,showModal,setShowModal,setBookingSlotBlock,setBookingSlotNo} = useContext(viewAppContext)
   console.log(" viewAppContext",viewAppContext);
   // let location = useLocation();
   // let data = location.state?.data

   // console.log(location, " useLocation Hook",data,"data");



    useEffect(() => {
        axios.get('/admin/getBookingSlotsData').then((response) => {
            console.log(response.data, "respomnse.data");
            setSlotsData(response.data)
        })
    },[])
    
  const handleSlotBooking= (slotBlock,slotNumber)=>{
   setShowModal(true)
  setBookingSlotBlock(slotBlock)
  setBookingSlotNo(slotNumber) 
  }
    console.log(showModal,"showModal");
   
    return (
        <>
            <div className='grid grid-cols-12 gap-3  bg-slate-200 p-3'>
                
               {
                slots.filter((slot) => slot.slotBlock == "A").map((slotData, index) => 
               slotData.available ? 
                <div  className='bg-blue-600 hover:bg-lime-500  min-w-fit min-h-fit sm:h-11 md:h-14 lg:h-16 xl:h-20  drop-shadow-lg grid cursor-pointer'
                onClick={()=>handleSlotBooking(slotData.slotBlock,slotData.slotNumber)} > 
                <p className='place-self-center'>{slotData.slotBlock}:{slotData.slotNumber}</p>
                </div>
                :
               <div  className='bg-amber-400  min-w-fit min-h-fit sm:h-11 md:h-14 lg:h-16 xl:h-20  drop-shadow-lg grid '> <p className='place-self-center'>{slotData.slotBlock}:{slotData.slotNumber}</p>
               </div> 
               
                )}
                  
             </div>
            <div className='grid grid-cols-12  '>
                <div className='col-start-1 col-end-5  '>
                    <div className='grid grid-cols-4 gap-3 p-3  bg-slate-200'>
                        {
                        slots.filter((slot) => slot.slotBlock == "B").map((slotData, index) => slotData.available ? 
                        <div  className='bg-blue-600 hover:bg-lime-500  min-w-fit min-h-fit sm:h-11 md:h-14 lg:h-16 xl:h-20  drop-shadow-lg grid cursor-pointer'
                        onClick={()=>handleSlotBooking(slotData.slotBlock,slotData.slotNumber)} > 
                        <p className='place-self-center'>{slotData.slotBlock}:{slotData.slotNumber}</p>
                        </div>
                        :
                       <div  className='bg-amber-400  min-w-fit min-h-fit sm:h-11 md:h-14 lg:h-16 xl:h-20  drop-shadow-lg grid '> <p className='place-self-center'>{slotData.slotBlock}:{slotData.slotNumber}</p>
                       </div> 
                       )
                    } </div>
                </div>
                <div className='col-start-9 col-end-13   bg-slate-200 '>
                    <div className='grid grid-cols-4 gap-3 p-3'>
                        {
                        slots.filter((slot) => slot.slotBlock == "C").map((slotData, index) => slotData.available ? 
                <div  className='bg-blue-600 hover:bg-lime-500  min-w-fit min-h-fit sm:h-11 md:h-14 lg:h-16 xl:h-20  drop-shadow-lg grid cursor-pointer'
                onClick={()=>handleSlotBooking(slotData.slotBlock,slotData.slotNumber)} > 
                <p className='place-self-center'>{slotData.slotBlock}:{slotData.slotNumber}</p>
                </div>
                :
               <div  className='bg-amber-400  min-w-fit min-h-fit sm:h-11 md:h-14 lg:h-16 xl:h-20  drop-shadow-lg grid '> <p className='place-self-center'>{slotData.slotBlock}:{slotData.slotNumber}</p>
               </div> 
               )
                    } </div>

                </div>

            </div>


        </>
    )
}

export default Slots
