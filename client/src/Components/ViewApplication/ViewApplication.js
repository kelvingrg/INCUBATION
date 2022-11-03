import React,{useEffect, useState} from 'react'
import {useContext} from 'react'
import {viewAppContext} from '../../Context/Context'
import axios from '../../Config/baseUrl'


function ViewApplication() {
    const {appId,appData} =useContext(viewAppContext)
    const [data,setApplication]=useState({})
  
    const addData = ()=>{
        appData.map((element)=>{
            if (appId==element._id){
                setApplication(element)
                
                
            }
        
          } )
    }

  useEffect(()=>{
 addData()
 axios.get(`/admin/setViewTrue/${false}`)
  }) 


  return (

    <>


    <div className='md:grid md:col-start-3 md:col-end-13 mt-10 '>
      <div className="mt-10 mr-5   w-full">
        <div className="md:grid  md:gap-6">
          
          <div className="mt-5 md:col-span-2 md:mt-0">
          
              <div className="overflow-hidden shadow sm:rounded-md ">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6  border-black ">
                    <div className="col-span-6 sm:col-span-3 ">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 ">
                        First name
                      </label>
                      <input
                        type="text"
                        name="fname"
                        id="first-name"
                        value={data.fname}
                       autoComplete="given-name"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-10"
                      />
                    </div>
    
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 ">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="lname"
                        value={data.lname}
                      
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-10 "/>
                    </div>
    
                    <div className="col-span-6 ">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={data.email}
                     
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-10"
                      />
                    </div>
    
                    
    
                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Street address
                      </label>
                      <input
                        type="text"
                        name="streetAddress"
                        value={data.streetAddress }
                        
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-10"
                      />
                    </div>
    
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        value={data.city}
                         
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-10 "
                      />
                    </div>
    
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        State / Province
                      </label>
                      <input
                       value={data.state}
                    
                        type="text"
                        name="state"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-10"
                      />
                    </div>
    
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        value={data.pin}
                     
                        name="pin"
                        id="pin"
                        autoComplete="postal-code"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-10 "
                      />
                    </div>
                     
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="mt-1 w-full rounded-md border-black shadow-sm h-10">
                     Company name
                      </label>
                      <input
                      type="text"
                       value={data.companyName}
                 
                        id="country"
                        name="companyName"
                        autoComplete="country-name"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-10"
                      />
                        
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="logo" className="mt-1 w-full rounded-md border-black shadow-sm h-10">
                     Company Logo
                      </label>
                      <input
                      type="file"
                        id="companyLogo"
                        name="companyLogo"
                       
                        className="mt-1 w-full rounded-md border-black shadow-sm h-10"
                      />
                        
                    </div>
    
    
    
    
    
    
                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                     1. Describe your team and Background
                      </label>
                      <input
                       value={data.a}
                     
                        type="text-area"
                        name="a"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-20 "
                      />
                    </div>
                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                 2. Describe your company and products
                      </label>
                      <input
                        type="text-area"
                        name="b"
                        id="street-address"
                        value={data.b}
                      
                        autoComplete="street-address"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-20 "
                      />
                    </div>
                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                     3. Describr the proiblem you are solving 
                      </label>
                      <input
                        type="text-area"
                        name="c"
                        id="street-address"
                        value={data.c}
                    
                        autoComplete="street-address"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-20 "
                      />
                    </div>
                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                     4. What is unique about your solution ?
                      </label>
                      <input
                        type="text-area"
                        name="d"
                        value={data.d}
                     
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-20 "
                      />
                    </div>
                    
                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                  5. What is your value proposition for the customer
                      </label>
                      <input
                        type="text-area"
                        name="e"
                        value={data.e}
                    
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-20 "
                      />
                    </div>
                    <div className="col-span-6">
                      <label htmlFor="street-address" className=" text-sm font-medium text-gray-700">
                6. Type of Incubation needed.
                      </label><br />
                    
                      <input
                        type="text-area"
                        name="e"
                        value={data.incubationType}
                    
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-20 "
                      />
                    </div>
                    </div>
                </div>
               
               
              </div>
      
          </div>
        </div>
      </div>
    
      </div>
    
      </>
  )
}

export default ViewApplication