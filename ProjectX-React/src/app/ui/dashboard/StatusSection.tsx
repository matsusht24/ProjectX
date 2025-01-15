import React from "react";
import HealthGrid from "./HealthGrid";
import "@/app/style/grid.css"


type status = {
  color: statusColor;
  desc: string;
};

export type statusColor = "green" | "red" | "yellow";

const status_updates: status[] = [
  { color: "red", desc: "X plant is dying" },
  { color: "yellow", desc: "Y plant needs help" },
];

function StatusSection() {
  return (
    <div className="card flex flex-row rounded-xl w-5/6 p-6  ">
      <div className="w-1/2">
        <HealthGrid />
      </div>
    
      <div className="w-1/2 flex flex-col items-center ">
        <strong className="font-bold text-xl pt-5  ">
          Status Updates
        </strong>
        <ul className="max-w-sm w-3/4"> 
            {
                status_updates.map((status, index) => (
                  <div key={index} className={`flex justify-between items-center ${status.color}_status m-2 p-1 pr-2 pl-2  rounded-full`}>
                      <div className={`${status.color}_dot w-2 h-2  rounded-full ml-1`} />
                     <li key={status.desc} className="w-full flex justify-center">{status.desc}</li>
                  </div>
                   
                ))
            }
        </ul>
      </div>
    </div>
  );
}

export default StatusSection;
