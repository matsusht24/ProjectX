import React from 'react'
import { statusColor } from './StatusSection'
import '@/app/style/grid.css'

const status: statusColor[][] = 
[['green', 'red', 'green' ], ['green', 'green', 'green' ], ['green', 'green', 'yellow' ], ['green', 'red', 'green' ]]





function HealthGrid() {

  return (
    <div className='w-full p-1 justify-items-center'>
       {status.map((row, row_index) => (
        <div key={`row-${row_index}`} className="flex gap-12 p-2">
          {
            row.map((color, state_index) => (
              <div key={`state-${row_index}-${state_index}`} role='button' className={`grid ${color}_grid bg-gray-100`}></div>
             
            ))
          }
        </div>
       ))}
      
    </div>
  )
}

export default HealthGrid