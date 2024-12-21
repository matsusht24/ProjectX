import React from "react";
import NavBar from "../ui/NavBar";
import Calender from "../ui/dashboard/Calender";
import SoilInfo from "../ui/dashboard/analytics/SoilInfo";
import WaterInfo from "../ui/dashboard/analytics/WaterInfo";
import StatusSection from "../ui/dashboard/StatusSection";
function Dashboard() {
  return (
    <div className="bg-white-200 m-4 p-4 rounded-md shadow-neo-dark">
      <div className="flex flex-col">
        <div className="navBar">
          <NavBar />
        </div>
        <div className="flex justify-center ">
          <StatusSection />
        </div>
        <div className="flex flex-row">
          <Calender />
          <div className="flex-col">
            <SoilInfo />
            <WaterInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
