import React from "react";
import NavBar from "../ui/NavBar";
import Calender from "../ui/dashboard/Calender";
import SoilInfo from "../ui/dashboard/analytics/SoilInfo";
import WaterInfo from "../ui/dashboard/analytics/WaterInfo";
import StatusSection from "../ui/dashboard/StatusSection";
import UserProfile from "../ui/UserProfile";
function Dashboard() {
  return (
    <div className=" m-2 p-1 rounded-md">
      <div className="flex-row flex">
        <NavBar />
        <div className="card flex flex-col w-full">
          <div className="flex justify-between p-8">
            <h1 className="font-bold text-2xl ">Welcome Back, User</h1>
            <UserProfile />
          </div>

          <div className="flex justify-center ">
            <StatusSection />
          </div>
          <div className="flex flex-row justify-center">
            <Calender />
            <div className="flex-col w-1/2">
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
