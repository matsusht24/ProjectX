import React from 'react'
import { statusColor } from './StatusSection'
import '@/app/style/grid.css'
import { PiPlant } from 'react-icons/pi'
import { BsBandaid } from 'react-icons/bs'
import { GiTombstone } from 'react-icons/gi'

const status: statusColor[][] = 
[['green', 'red', 'green' ], ['green', 'green', 'green' ], ['green', 'green', 'yellow' ], ['green', 'red', 'green' ]]

type assignProps = {
  color:statusColor, 
  row_index: number, 
  state_index: number, 
}

function assignLogo({color, row_index, state_index}: assignProps) {
  switch (color) {
    case 'green':
      return <div key={`state-${row_index}-${state_index}`} role='button'  className="grid shadow-inset-grid"> <PiPlant className="w-full h-full p-1" color="#87af7d"/></div>
    case 'red':
      return <div key={`state-${row_index}-${state_index}`} role='button'  className="grid shadow-inset-grid"> <GiTombstone className="w-full h-full p-1" color="#A52A2A"/></div>
    case 'yellow':
      return <div key={`state-${row_index}-${state_index}`} role='button'  className="grid shadow-inset-grid"> <BsBandaid className="w-full h-full p-1" color="#EED202"/></div>
    default: 
      return <div key={`state-${row_index}-${state_index}`} role='button' className={`grid bg-gray-100`}></div>
  }
}


function HealthGrid() {

  return (
    <div className='w-full p-5 justify-items-center'>
       {status.map((row, row_index) => (
        <div key={`row-${row_index}`} className="flex gap-12 p-2">
          {
            row.map((color, state_index) => (
              // <div key={`state-${row_index}-${state_index}`} role='button' className={`grid ${color}_grid bg-gray-100`}></div>
              assignLogo({color,row_index, state_index})
            ))
          }
        </div>
       ))}
      
    </div>
  )
}

export default HealthGrid