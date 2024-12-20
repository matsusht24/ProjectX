import React from "react";
import HealthGrid from "./HealthGrid";


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
