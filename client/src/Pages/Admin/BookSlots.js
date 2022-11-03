
import React, { useEffect,useContext } from 'react'
import AddSlotModal from '../../Components/AddSlotModal/AddSlotModal'
import ContentBox from '../../Components/ContentBox/ContentBox'
import NavBar from '../../Components/NavBar/AdminNavBar'
import SideBarMenu from '../../Components/SideBarMenu/SideBarMenu'
import {viewAppContext} from '../../Context/Context'


function BookSlots() {
  const{showModal}= useContext(viewAppContext)
    return (
        <div><NavBar/>
       
    {  showModal &&  <AddSlotModal/>}
        
       <div className='md:grid md:grid-cols-12 gap-4  m-3 '>
         <SideBarMenu/>
      <ContentBox BookSlots={true}/>
         </div>
         
        </div>
      )
}

export default BookSlots