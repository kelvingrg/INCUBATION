import React from 'react'
import NavBar from '../../Components/NavBar/AdminNavBar'
import Table from '../../Components/Table/Table'
import SideBarMenu from '../../Components/SideBarMenu/SideBarMenu'
import AppListTable from '../../Components/AppListTable/AppListTable'

function ApplicationList() {
  return (
    <div><NavBar></NavBar> 
   <div className='md:grid md:grid-cols-12 gap-4  m-3'>
     <SideBarMenu/>
    <AppListTable/>
     </div>
    </div>
  )
}

export default ApplicationList