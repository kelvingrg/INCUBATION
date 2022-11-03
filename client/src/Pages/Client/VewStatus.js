import React from 'react'
import Home from '../../Components/Home/Home'
import NavBar from '../../Components/NavBar/NavBar'

function VewStatus() {
  return (
    <div><NavBar/>
    <Home viewstatus={true}/>
    
    </div>
  )
}

export default VewStatus