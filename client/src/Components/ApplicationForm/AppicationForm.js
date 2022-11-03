import React,{useState,useContext} from 'react'
import useHistory,{ useNavigate }  from 'react-router-dom'
import './ApplicationForm.css'
import axios from '../../Config/baseUrl'
import Swal from 'sweetalert2'
import { AuthLoginContext } from '../../Context/Context'



function AppicationForm() {
  const {user,userId}=useContext(AuthLoginContext)
  const navigate = useNavigate()

  const initialvalues = {
    fname: "",
    lname: "",
    email:"",
    state:"",
    streetAddress:"",
    city:"",
    companyName:"",
    pin:"",
    a:"",
    b:"",
    c:"",
    d:"",
    e:"",
    incubationType:"",
    userId:userId
  };
  
  console.log(userId);
const [formData,setFormData]=useState(initialvalues)

const handleChange =(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})

} 
const handleSubmit= (e)=>{
    e.preventDefault()
    setFormData({...formData,userId:userId})

navigate('/viewStatus')

    axios({
      method:"post",
      url:'/applicationForm',
      data:formData
      }).then((response)=>{
        
        Swal.fire({
          title: 'Sweet!',
          text: 'Modal with a custom image.',
          imageUrl: 'https://unsplash.it/400/200',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
        console.log("reached bak to frontend" ,"");
      })
    }

  return (
    <>


<div className='grid grid-cols-9 mt-10 '>
  <div className="mt-10 sm:mt-0 col-start-3  col-span-7">
    <div className="md:grid md:grid-cols-3 md:gap-6">
      
      <div className="mt-5 md:col-span-2 md:mt-0">
        <form onSubmit={handleSubmit} >
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
                    value={formData.fname}
                    onChange={handleChange}
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
                    value={formData.lname}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.streetAddress }
                    onChange={handleChange}
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
                    value={formData.city}
                    onChange={handleChange}
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
                   value={formData.state}
                   onChange={handleChange}
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
                    value={formData.pin}
                    onChange={handleChange}
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
                   value={formData.companyName}
                   onChange={handleChange}
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
                   value={formData.a}
                   onChange={handleChange}
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
                    value={formData.b}
                   onChange={handleChange}
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
                    value={formData.c}
                   onChange={handleChange}
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
                    value={formData.d}
                   onChange={handleChange}
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
                    value={formData.e}
                   onChange={handleChange}
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
                    type="radio"
                    name="incubationType"
                    
                   onChange={handleChange}
                    id="incubationType"
                    value="Virtual Incubation"
                    className=""
                  />
                   <label htmlFor="street-address" className=" text-sm font-medium text-gray-700 pl-2">
           Virtual Incubation
                  </label><br />
                  <input
                    type="radio"
                    name="incubationType"
                    id="incubationType"
                    value="Physical Incubation"
                    onChange={handleChange}
                    className=""
                  />
                    <label htmlFor="street-address" className=" text-sm font-medium text-gray-700 pl-2">
      Physical Incubation
                  </label>
                </div>
                </div>
            </div>
           
           
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 flex justify-center">
            <span className='bg-sky-500'> <button
                type="submit"
                className=" bg-cyan-500 inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
               Submit 
              </button></span> 
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  </div>

  </>
  )
  }

export default AppicationForm