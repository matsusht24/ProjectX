import React from "react";
import NavBar from "../ui/NavBar";
import HealthGrid from "../ui/dashboard/HealthGrid";
import Calender from "../ui/dashboard/Calender";
import SoilInfo from "../ui/dashboard/analytics/SoilInfo";
import WaterInfo from "../ui/dashboard/analytics/WaterInfo";

function Dashboard() {
  return (
    <div className="flex flex-col">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="items-center">
        <HealthGrid />
      </div>
      <div className="flex flex-row">
        <Calender />
        <div className="flex-col">
          <SoilInfo />
          <WaterInfo />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
