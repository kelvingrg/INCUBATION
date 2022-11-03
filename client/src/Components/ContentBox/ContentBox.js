import React,{useContext,useState,useEffect} from 'react'
import Slots from '../Slots/Slots'
import AppListProcessingRow from '../AppListTable/AppListProcessingRow'
import AppListTable from '../AppListTable/AppListTable'
import Table from '../Table/Table'
import {viewAppContext} from '../../Context/Context'
import axios from '../../Config/baseUrl'


function ContentBox(props) {
  let t=19
  const{viewApp,setViewApp,setAppData}=useContext(viewAppContext)

useEffect(()=>{
  axios({
    method:'get',
    url:'/admin/appliactionData'
  }).then( (response)=>{
  setAppData(response.data)
  console.log(response.data);
 setViewApp(response.data)
  })
},[])

    return (

        <div className=' w-full col-span-full md:col-start-3 md:col-end-13'>

            {
            props.applist && <>
                <AppListTable notOpen={true}/>
                <AppListTable pending={true}/></>
        }
            {
            props.approvedList && <Table/>
        }
            {
            props.processingList && <AppListTable processingList={true}/>
        }
            {
            props.BookSlots && <Slots/>
        } </div>
    )
}


export default ContentBox
