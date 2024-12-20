import React from 'react'
import { statusColor } from './StatusSection'
import '@/app/style/grid.css'

const status: [statusColor[]] = 
[['green', 'red', 'green' ], ['green', 'green', 'green' ], ['green', 'green', 'yellow' ], ['green', 'red', 'green' ]]


function HealthGrid() {

  return (
    <div className='w-full p-5'>
       {status.map((row) => (
        <div className="flex gap-2 p-1">
          {
            row.map((state) => (
              <div key={state} role='button' className={`grid ${state}_grid w-8 h-8 rounded-full`}></div>

            ))
          }
        </div>
       ))}
      
    </div>
  )
}

export default HealthGrid