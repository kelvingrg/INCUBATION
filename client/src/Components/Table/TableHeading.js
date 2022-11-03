import React from 'react'

function TableHeading() {
  return (
    <tr>
                <th scope="col" className="py-3 px-6">
                   SlNo.
                </th>
                <th scope="col" className="py-3 px-6">
                   Copmpany Name
                </th>
                <th scope="col" className="py-3 px-6  hidden md:block">
                 Company Details
                </th>
                <th scope="col" className="py-3 px-6">
                    View Application 
                </th>
                <th scope="col" className="py-3 px-6 hidden md:block">
                   status
                </th>
                <th scope="col" className="py-3 px-6 ">
                    Action
                </th>
            </tr>
  )
}

export default TableHeading