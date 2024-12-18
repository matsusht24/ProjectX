import React from "react";
import HealthGrid from "./HealthGrid";


type status = {
  color: statusColor;
  desc: string;
};

export type statusColor = "Green" | "Red" | "Yellow";

const status_updates: status[] = [
  { color: "Red", desc: "X plant is dying" },
  { color: "Yellow", desc: "Y plant needs help" },
];

function StatusSection() {
  return (
    <div className="flex flex-row shadow-neo-dark rounded-sm">
      <HealthGrid />
      <div className="w-1/2 ">
        <strong className="font-bold text-lg text-center">
          Status Updates
        </strong>
        <ul> 
            {
                status_updates.map((status) => (
                    <li key={status.desc}>{status.desc}</li>
                ))
            }
        </ul>
      </div>
    </div>
  );
}

export default StatusSection;
