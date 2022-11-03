import React,{useEffect,useState} from 'react'
import axios from '../../Config/baseUrl' 
import {useContext} from 'react'
import {viewAppContext} from '../../Context/Context'

function AppListProcessingRow() {
    const {viewApp,setViewApp} =useContext(viewAppContext)

    return (
  
      viewApp.filter((filter)=>filter.status=='Processing').map((element,index)=>
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
         // setAppId(element._id)
         // navigate('/viewApplicationDetails')
        }}>view <i class="fa-thin fa-eye"></i></button>
      </td>
      <td className="py-4 px-6 hidden md:block ">
      {element.status}             
       </td>
      
      <td className="py-4 px-6">
         
          <button className='hover:bg-orange-500 border-b border bg-transparent hover:border-white p-2  border-black ' onClick={()=>{
             axios.get(`/admin/updateSatus?status=Approved&appId=${element._id}`).then((response)=>{
              setViewApp(response.data.response)
             })
          }}>Approve</button>
    
      </td>
     
  </tr>
  )
    )
  }

export default AppListProcessingRow