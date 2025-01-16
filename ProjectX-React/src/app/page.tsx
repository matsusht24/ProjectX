"use client";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import NavBar from "./ui/NavBar";
import UserLogin from "./ui/UserLogin";

export interface user {
  name: string;
  img: string;
}

export const user = {
  name: "Shane",
  img: FaRegUser,
};

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className=" flex p-10">
        <UserLogin />
      </div>
    </div>
  );
}
