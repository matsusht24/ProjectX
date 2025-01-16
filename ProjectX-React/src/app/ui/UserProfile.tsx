import React from "react";
import { user } from "../page";
import { FaRegUser } from "react-icons/fa";
function UserProfile() {
  return (
    <div className="flex space-x-4 ">
      {/* {user.img && (
        <img
          src={user.img}
          alt={`${user.name}'s avatar`}
          className="w-10 h-10 rounded-full"
        />
      )} */}
      <FaRegUser />
      <div className="flex-col gap-0.5">
        <span className="font-bold text-lg">{user.name}</span>
        <p className="text-md">Admin</p>
      </div>
    </div>
  );
}

export default UserProfile;
