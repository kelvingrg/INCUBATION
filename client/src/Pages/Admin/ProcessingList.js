import React from 'react'
import ContentBox from '../../Components/ContentBox/ContentBox'
import AdminNavBar from '../../Components/NavBar/AdminNavBar'
import SideBarMenu from '../../Components/SideBarMenu/SideBarMenu'

function ProcessingList() {
  return (
    <>
    <AdminNavBar/>
<div className='md:grid md:grid-cols-12 gap-4  m-3'>
 <SideBarMenu/>
<ContentBox processingList={true}/>
</div>

</>
    
  )
}

export default ProcessingList