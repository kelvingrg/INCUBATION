
import React,{useEffect,useState} from 'react'
import axios from '../../Config/baseUrl' 
import {useContext} from 'react'
import {viewAppContext} from '../../Context/Context'
import ViewApplication from '../../Components/ViewApplication/ViewApplication'
import NavBar from '../../Components/NavBar/AdminNavBar'
import SideBarMenu from '../../Components/SideBarMenu/SideBarMenu'


function ViewApplicationDetails() {
    
  return (
     <> 
    <NavBar/>
   <div className='md:grid md:grid-cols-12 gap-4  m-3'>
     <SideBarMenu/>
  <ViewApplication></ViewApplication>
     </div> 
     </>
  )
}

export default ViewApplicationDetails