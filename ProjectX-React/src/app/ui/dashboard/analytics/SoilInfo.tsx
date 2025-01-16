import { create } from 'domain';
import React from 'react'

type SoilInfoProps = {
  ph: number, 
  nutrients_levels: number,
  organinc_matter: number,
  dranage: number,
};

const info: SoilInfoProps = {
  ph: 6.5,
  nutrients_levels: 4,
  organinc_matter: 3,
  dranage: 2,
}


const phRanges = {
  most: [6, 7.5],
  acidic: [4.5, 6],
  alkaline: [7.5, 8.0],
  neutral: [0, 14], // Assuming pH scale from 0 to 14
};

function phCheck(ph: number) {
  if (ph > phRanges.most[0] && ph < phRanges.most[1]) {
    return 'most';
  } else if (ph > phRanges.acidic[0] && ph < phRanges.acidic[1]) {
    return 'acidic';
  } else if (ph > phRanges.alkaline[0] && ph < phRanges.alkaline[1]) {
    return 'alkaline';
  } else {
    return 'neutral';
  }
}

function phColor(ph: number) {
  const range = phCheck(ph);
  switch (range) {
    case 'most':
      return 'green';
    case 'acidic':
      return 'red';
    case 'alkaline':
      return 'blue';
    case 'neutral':
      return 'yellow';
  }
}


function createBar(info: SoilInfoProps) {
  const bars = [];
  for (const [key, value] of Object.entries(info)) {
    const color = phColor(value);
    bars.push(<div key={key} className='flex justify-start p-2'><h3>{key}:</h3><div className='rounded-full' style={{width: `${value * 10}%`, backgroundColor: color}}></div></div>)
  }
  return bars;

}

function SoilInfo() { 
  
  return (
    <div className='card m-4 p-4 flex-col w-full'>  
      <h2 className='font-bold text-xl text-center  '>Soil Information</h2>
      {createBar(info)}
     </div>
  )
}

export default SoilInfo