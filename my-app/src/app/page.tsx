import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import PlantCard from "./ui/PlantInfoCard";
import PlantGrid from "./ui/PlantGrid";

interface user {
  name: string;
  img: string;
}

const user = {
  name: "Shane",
  img: FaRegUser,
};

const plants = [{status: "Good", number:1}, {status: "Watering", number:2}, {status: "Check", number:3}]
export default function Home() {
  return (
    <div className="fixed bg-green-background w-screen h-screen">
      <div className="flex flex-row m-5 bg-beige-foreground max-h-full  rounded-md shadow-lg  ">
        <div className="  p-3 w-1/4 m-1 ">
          <div className="flex justify-start">
            <FaRegUser />
            <div className="flex-col">
              <p>Welcome, </p>
              <p>{user.name}</p>
            </div>
          </div>
          <div className="plant info">
            <strong>Status:</strong>
            <ul>
            {
              plants.map((plant) => (
                <li key={plant.number}>{`Plant ${plant.number}: ${plant.status}`}</li>
              ) 
            )
            }
            </ul>
            
          </div>
        </div>
        <div className=" p-10 w-1/2 m-1 shadow-lg">
            <strong>Garden Grid</strong>
            <div className="h-full">
              <PlantGrid />

            </div>
        </div>
        <div className=" p-10 w-1/4 m-1 ">
         <PlantCard />
        </div>
      </div>
    </div>
  );
}
