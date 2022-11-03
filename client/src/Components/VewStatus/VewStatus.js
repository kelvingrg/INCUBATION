import axios from '../../Config/baseUrl'
import React,{useEffect,useState,useContext} from 'react'
import { AuthLoginContext } from '../../Context/Context'

function VewStatus() {
    const {user,userId}=useContext(AuthLoginContext)
    const[viewStatusData,setViewStatusData]=useState([])

useEffect(()=>{
 
    axios.get(`/viewStatus/?userId=${userId}`).then((response)=>{
       console.log(response)
       setViewStatusData(response.data)
    })
},[])
  return (
  

<> 
<div className="container mx-auto px-4 sm:px-8 max-w-3xl">
    <div class="py-8">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            Apppication Id
                            </th>
                            
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                             Date
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                               Progress
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {viewStatusData.filter((element)=>{
                           if(element.status=="Pending")
                           return element.progress=25
                           else if(element.status=="Processing")
                           return element.progress=50
                           else if(element.status=="Approved")
                           return element.progress=100
                        }).map(element=> <tr>
                           
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                 { element._id}
                                </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  {element.timeStamp.match(/([^T]+)/)[0].split("-").reverse().join("/") }
                                </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                               
                                 
                                    
<div class="w-full bg-gray-200 rounded-full">
  <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: `${element.progress}%`}}>{element.status}</div>
</div>

                              
                            
                            </td>
                        </tr>)}
                  
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

</>




  )
}

export default VewStatus