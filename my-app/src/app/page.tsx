import Image from "next/image";
import { FaRegUser } from "react-icons/fa";

interface user {
  name: string;
  img: string;
}

const user = {
  name: "Shane",
  img: FaRegUser,
};

export default function Home() {
  return (
    <div className="fixed bg-black w-screen h-screen">
      <div className="flex flex-row m-5 h-full">
        <div className="flex-col bg-white p-3 w-1/4 ">
          <div className="flex justify-start">
            <FaRegUser />
            <div className="flex-col">
              <p>Welcome, </p>
              <p>{user.name}</p>
            </div>
          </div>
          <div className="plant info">
            <strong>Status:</strong>
          </div>
        </div>
        <div className="bg-white p-10 w-1/2 m-1 ">grid</div>
        <div className="bg-white p-10 w-1/4 m-1 ">panel</div>
      </div>
    </div>
  );
}
