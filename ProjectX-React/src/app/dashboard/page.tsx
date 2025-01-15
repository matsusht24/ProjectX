import React from "react";
import NavBar from "../ui/NavBar";
import Calender from "../ui/dashboard/Calender";
import SoilInfo from "../ui/dashboard/analytics/SoilInfo";
import WaterInfo from "../ui/dashboard/analytics/WaterInfo";
import StatusSection from "../ui/dashboard/StatusSection";
function Dashboard() {
  return (
    <div className=" m-2 p-1 rounded-md">
      <div className="flex-row flex">
        <NavBar />
        <div className="card flex flex-col w-full">
          <div className="flex justify-center ">
            <StatusSection />
          </div>
          <div className="flex flex-row justify-center">
            <Calender />
            <div className="flex-col">
              <SoilInfo />
              <WaterInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
