import React from 'react'
import ContentBox from '../../Components/ContentBox/ContentBox'
import NavBar from '../../Components/NavBar/AdminNavBar'
import SideBarMenu from '../../Components/SideBarMenu/SideBarMenu'

function AdminHome() {
  return (
    <> 
    <NavBar/>
   <div className='grid grid-cols-12 gap-4  m-3'>
     <SideBarMenu/>
     <ContentBox approvedList={true} />
     </div> 
     </>
  )
}

export default AdminHome