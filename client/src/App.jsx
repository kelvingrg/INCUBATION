
import './App.css';
import './index.css'
import React,{useState,useEffect} from 'react';
import { Route,Routes} from  'react-router-dom'
 import Login from './Pages/Client/Login';
 import SignUpPage from './Pages/Client/SignUp';
 import HomePage from './Pages/Client/Home';
 import AppFormPage from './Pages/Client/AppFormPage';
 import AdminHome from './Pages/Admin/AdminHome'
 import { AuthContext, AuthLoginContext,viewAppContext } from './Context/Context';
import ViewApplicationDetails from './Pages/Admin/ViewApplicationDetails';
import ApplicationList from './Pages/Admin/ApplicationList';
import NewApplication from './Pages/Admin/NewApplication';
import ProcessingList from './Pages/Admin/ProcessingList';
import BookSlots from './Pages/Admin/BookSlots';
import AdminLogin from './Pages/Admin/AdminLogin';
import RequireAuth from './hooks/RequireAuth';
import UseAuth from './hooks/UseAuth'
import VewStatus from './Pages/Client/VewStatus';





function App() {
  const [user,setUser]=useState('')
  const [userId,setUserId]=useState('')
  const [viewApp,setViewApp]=useState([])
  let [appData,setAppData]=useState([])
  let [appId,setAppId]=useState('')
  let [admin,setAdminId]=useState('')
  const[slots,setSlotsData]=useState([])  
  const [showModal, setShowModal] = useState(false);
  const[bookingSlotBlock,setBookingSlotBlock]=useState('')
  const[bookingSlotNo,setBookingSlotNo]=useState()
const[auth,setAuth]=useState()




// useEffect(()=>{
// const userToken=localStorage.getItem(userToken)
// if(userToken)
// {
//   const userData=localStorage.getItem(userData)
// setUser(userData[0].name)
// setUserId(userData[0]._id)
// }
// },[])

  return (
    <viewAppContext.Provider value={{viewApp,setViewApp,appData,setAppData,appId,setAppId,slots,setSlotsData,showModal, setShowModal,bookingSlotBlock,setBookingSlotBlock,bookingSlotNo,setBookingSlotNo}}>
    <AuthLoginContext.Provider value={{user,setUser,userId,setUserId,admin,setAdminId}}>
    <AuthContext.Provider values={{auth,setAuth}}>
      <Routes>
   
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
   <Route element={ <UseAuth/>}>
       <Route path='/' element={<HomePage/>}/>
      <Route path='/apply' element={<AppFormPage/>}/>
      <Route path='/viewstatus' element={<VewStatus/>}/>
   </Route> 
    
    <Route path='/admin' element={<AdminLogin/>}/>

   <Route element={ <RequireAuth/>} >
     
      <Route path='/adminHome' element={<AdminHome/>}/>
      <Route path='/viewApplicationDetails' element={<ViewApplicationDetails/>}/>
      <Route path='/newApplication' element={<NewApplication/>}/>
      <Route path='/ProcessingList' element={<ProcessingList/>}/>
      <Route path='/BookSlots' element={<BookSlots/>}/>
  </Route>   

</Routes>
</AuthContext.Provider>   
</AuthLoginContext.Provider>
</viewAppContext.Provider>



        
     
  
  

   

 
  );
}

export default App;
