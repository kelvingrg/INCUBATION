import React,{useContext, useEffect, useState} from 'react'
import { viewAppContext } from '../../Context/Context'
import {useNavigate} from 'react-router-dom'
import axios from '../../Config/baseUrl'
import { Link } from "react-router-dom";

function Row() {
    const {viewApp,setAppId,setViewApp}= useContext(viewAppContext)
    const navigate=useNavigate()
   
 useEffect(()=>{
        console.log(viewApp,"999999999");
                    },[viewApp])
  
  return (


    viewApp.filter((filter)=>filter.status=='Approved').map((element,index)=>
<tr className=" bg-white border-black  text-black hover:bg-neutral-500 hover:text-white">
<td className="py-4 px-6 hidden md:block">
    {index+1}
    </td>
    <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
    {element.companyName}
    </th>

    <td className="py-4 px-6 hidden md:block">
    {element.a}
    </td>
    <td className="py-4 px-6 ">
      <button onClick={()=>{
        setAppId(element._id)
        navigate('/viewApplicationDetails')
      }}>view <i class="fa-thin fa-eye"></i></button>
    </td>
    <td className="py-4 px-6 hidden md:block ">
    {element.status}             
     </td>
    
    <td className="py-4 px-6">
       
    <Link to="/BookSlots" state={{id:element._id}}><button className='hover:bg-orange-500 border-b border bg-transparent hover:border-white p-2  border-black '>Allocate Slots</button></Link>
  
    </td>
   
</tr>
)

  
  )
}

export default Row