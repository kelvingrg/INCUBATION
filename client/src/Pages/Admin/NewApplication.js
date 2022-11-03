import React from 'react'
import NavBar from '../../Components/NavBar/AdminNavBar'
import Table from '../../Components/Table/Table'
import SideBarMenu from '../../Components/SideBarMenu/SideBarMenu'
import AppListTable from '../../Components/AppListTable/AppListTable'
import ContentBox from '../../Components/ContentBox/ContentBox'

function NewApplication() {
    return (
      <>
            <NavBar></NavBar> 
       <div className='md:grid md:grid-cols-12 gap-4  m-3'>
         <SideBarMenu/>
      <ContentBox applist={true}/>
        </div>

        </>
      )
}

export default NewApplication