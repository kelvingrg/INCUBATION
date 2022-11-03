import React,{useEffect,useState} from 'react'
import axios from '../../Config/baseUrl'
import {useNavigate} from 'react-router-dom'

function SignUp() {
const navigate=useNavigate()
const [name,setName] =useState('')
const [email,setEmail] =useState('')
const [mobNumber,setMobNummber] =useState('')
const [password,setPassword] =useState('')
const [emailexist, setEmailErr]=useState(false)
const [mobexist,setMobErr]=useState(false)
const [invalidEntry,setInavlidEntry]=useState(false)
//const [,set] =useState('')
useEffect(()=>{},[invalidEntry,mobexist,emailexist])
const handleSubmit=async(e)=>{
   e.preventDefault()
if(vallidateEmail() && vallidateNumber() && vallidateName()){

   const data=await axios({ 
      method:'post',
      url:'/signup',
      data:{
         name,email,mobNumber,password

      }
   })
   const {emailerr,moberr}=data.data.response
   console.log(emailerr,moberr);
   if(emailerr||moberr){
      if(emailerr)
      setEmailErr(emailerr)
      if(moberr)
      setMobErr(moberr)
    }
    else{
navigate('/login')
    }
   }
   else{
      setInavlidEntry(true)
   }
}


const vallidateName=()=>{
   var regx=/^[a-zA-Z ]+$/;
   if(regx.test(name))
   return(true)
 else
 return false
}
const vallidateNumber=()=>{
   var regx=/^([0-9]{10})+$/;
   if(regx.test(mobNumber))
   return(true)
   else
   return false
}
const vallidateEmail=()=>{
   var regx=/^([a-zA-Z0-9\.-_ ]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,20})(.[a-zA-Z]{2,5})$/;
    if(regx.test(email))
    return true
    else 
    return false
}

  return (
    
   <div className=''>
       <div className="flex items-center justify-center p-12">
  
   <div className="mx-auto w-full max-w-[550px]">
      <form onSubmit={handleSubmit} >
         <div className="mb-5">
            <label
               for="name"
               className="mb-3 block text-base font-medium text-[#07074D]"
               >
         Full Name
            </label>
            <input
               type="text"
               name="name"
               id="name"
               value={name}
               onChange={(e)=>{
                  setName(e.target.value)
                  setMobErr(false)
                  setInavlidEntry(false)
               
               }}
               placeholder="Full Name"
               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
               />
         </div>
         <div className="mb-5">
            <label
               for="email"
               className="mb-3 block text-base font-medium text-[#07074D]"
               >
            Email Address
            </label>
            <input
               type="email"
               name="email"
               id="email"
               value={email}
               onChange={(e)=>{
                  setEmail(e.target.value)
               setEmailErr(false)
               setInavlidEntry(false)
               }}
               placeholder="example@domain.com"
               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
               />
                { emailexist? <label
               for="email"
               className="mb-3 block text-base font-medium text-red-500">
            This E-mail is already registered
            </label>:null }
         </div>
         <div className="mb-5">
            <label
               for="subject"
               className="mb-3 block text-base font-medium text-[#07074D]"
               >
           Mobile Number
            </label>
            <input
               type="number"
               name="subject"
               id="subject"
               value={mobNumber}
               onChange={(e)=>{
                  setMobNummber(e.target.value)
                  setMobErr(false)
                  setInavlidEntry(false)
               
               }}
               placeholder="Enter your Mobile Number "
               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
               />
              {mobexist && <label
               for="subject"
               className="mb-3 block text-base font-medium text-red-500">
               
         This number is already registered
            </label>}
         </div>
         <div className="mb-5">
            <label
               for="subject"
               className="mb-3 block text-base font-medium text-[#07074D]"
               >
        Password
            </label>
            <input
               type="password"
               name="subject"
               id="subject"
               value={password}
               onChange={(e)=>{setPassword(e.target.value)
                  setInavlidEntry(false)}}
               placeholder="Enter your Password"
               className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
               />
         </div>
         
         <div className='flex justify-center'>
         {invalidEntry ? <label
               for="subject"
               className="mb-3 block text-base font-medium text-red-500">
               
       Please check your inputs 
            </label> :  <button
               className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
            Submit
            </button>
           }
         </div>
      </form>
   </div>
</div>

   </div>
  )
}

export default SignUp