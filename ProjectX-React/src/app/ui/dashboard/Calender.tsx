"use client"
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';

function Calender() {
  return (
    <div className="m-4 p-4 shadow-neo-dark rounded-xl"><FullCalendar
    plugins={[ dayGridPlugin ]}
    initialView="dayGridMonth"/>
</div>
    
  )
}

export default Calender