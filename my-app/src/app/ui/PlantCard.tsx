import React from 'react'

interface plantType {
    id: number,
    type:string, 
    days: number, 
    lastWatered: string, 
    water_freq: number, 
    next_watering: Date,
    edible: boolean, 

}

const tmp_plant: plantType = {
    id: 12134,
    type: "vegetable",
    days: 4,
    lastWatered: "3 days ago",
    water_freq: 3,
    next_watering: new Date(2024, 11, 8),
    edible: true,
}
function PlantCard() {
  return (
    <div className="flex flex-col gap-2 p-4">
        <strong>Plant Name</strong>
        { Object.entries(tmp_plant).map(([key, value]) => (
            <p>{`${key}: ${value}`}</p>
        ))}
    </div>
  )
}

export default PlantCard