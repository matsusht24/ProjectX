import React from 'react'
import { statusColor } from './StatusSection'

const status: [statusColor[]] = 
[['Green', 'Red', 'Green' ], ['Green', 'Green', 'Green' ], ['Green', 'Green', 'Yellow' ], ['Green', 'Red', 'Green' ]]

function AssignColor(color: statusColor) {
  switch(color) {
    case 'Green':
      return <div role='button' className="bg-green-100 w-5 h-5 rounded-full"></div>
    case 'Red':
      return <div role='button' className="bg-red-100 w-5 h-5 rounded-full"></div>
    case 'Yellow':
      return <div role='button' className="bg-yellow-100 w-5 h-5 rounded-full"></div>
    default:
      return <div key={color} role='button' className="bg-gray-50 w-5 h-5 rounded-full"></div>

  }


}
function HealthGrid() {

  return (
    <div className='wrapper'>
       {status.map((row) => (
        <div className="flex flex-row justify-between">
          {
            row.map((state) => (
              AssignColor(state)

            ))
          }
        </div>
       ))}
      
    </div>
  )
}

export default HealthGrid