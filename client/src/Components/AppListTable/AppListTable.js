import React from 'react'
import TableHeading from '../Table/TableHeading'
import AppListNotOpenPendingRow from './AppListNotOpenPendingRow'
import AppListRow from './AppListPendingRow'
import AppListProcessingRow from './AppListProcessingRow'

function AppListTable(props) {
  return (

        
  
 <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
 { props.notOpen && <h2 className='text-2xl text-red-700 mb-5 font-medium '>Latest Applications</h2>}
       { !props.notOpen && <h2 className='text-2xl text-red-700  font-medium '>Pending Applications</h2>}
        <table className="w-full text-sm text-left text-black dark:text-black">
            <thead className="text-xs text-black uppercase bg-white border-b border-black dark:text-black">
    
    <TableHeading/>
             
            </thead>
            <tbody>
                
                
     {props.notOpen &&<AppListNotOpenPendingRow/>}
     {props.pending &&<AppListNotOpenPendingRow/>}
     {props.processingList && <AppListProcessingRow/>}
     <br />

     

          
    
            </tbody>
        </table>
    </div>
    
    
    
    
    
    
            

        
  )
}

export default AppListTable