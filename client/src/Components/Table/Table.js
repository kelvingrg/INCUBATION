import React,{useEffect,useState} from 'react'
import axios from '../../Config/baseUrl' 
import {useContext} from 'react'
import {viewAppContext} from '../../Context/Context'
import Row from './Row'
import TableHeading from './TableHeading'

function Table() {
    const{viewApp,setViewApp,appData,setAppData}=useContext(viewAppContext)

  
    console.log(appData);


  return (
    <div>
      <h2 className='text-2xl text-red-700 mb-5 font-medium'>Approved List</h2>
        
<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-black dark:text-black">
        <thead className="text-xs text-black uppercase bg-white border-b border-black dark:text-black">


            <TableHeading></TableHeading>
         
        </thead>
        <tbody>
            <Row/>
      

        </tbody>
    </table>
</div>






        
    </div>
  )
}

export default Table