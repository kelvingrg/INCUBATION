import axios from '../../Config/baseUrl';
import React,{useContext,useEffect,useState} from 'react'
import { viewAppContext } from '../../Context/Context';




const AddSlotModal = () => {
  const{setShowModal,bookingSlotNo,bookingSlotBlock,selectedCx,setSlotsData}=useContext(viewAppContext)
  const[applicantApp ,setApplicantApp]=useState([])
  const [sApp, setSApp]=useState('')
  

  useEffect(()=>{
    axios.get('/admin/getApprovedAppList').then((response)=>{
      console.log(response,"getApprovedAppList")
      setApplicantApp(response.data)
    })
  },[])

  console.log(sApp,'sApp');

  const hanleChange=(e)=>{ 
    setSApp(e.target.value) 
  }
  console.log(sApp,'sApp');
  const handleSubmit=()=>{
    setShowModal(false)
    axios.get(`/admin/updateBookingSlot/?bookingSlotNo=${bookingSlotNo}&bookingSlotBlock=${bookingSlotBlock}&selectedCx=${sApp}`).then((response)=>{
      console.log(response,"response data after bookinh gert done ");
      setSlotsData(response.data)
    })
  }
  return (
  
     
       
        <>        
         <div className=" backdrop-blur-sm flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none shadow-lg" >
            <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="text-center p-5 border-b border-solid border-gray-300 rounded-t">
                  
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full ">
                      x
                    </span>
                  </button> <br />
                  <h3 className="text-3xl font=semibold">Allocate The {bookingSlotNo}{bookingSlotBlock} Seat For</h3>
                </div>
                <label htmlFor="label" className='ml-3'> Select the Applicant</label>
                <select value={sApp}  className="w-1/3 border border-solid  border-black ml-3 p-3   bg-clip-padding bg-no-repeat rounded transition ease-in-out z-40" onChange={hanleChange}>
                <option value=""></option>
                 {
                applicantApp.map((data)=> <option value={data._id}>{data.companyName}</option>  )  
                 }

                </select>
                <div className="">
                 
                </div>
                <div className="flex items-center justify-end p-6  border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-blue-600  active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"  onClick={handleSubmit} >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          

        </>
  );
};



export default AddSlotModal