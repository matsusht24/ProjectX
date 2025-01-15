import React from "react";
import Image from "next/image";
import ThemeToggleButton from "./ThemeToggleButton";
import Link from "next/link";

type NavItems = {
  link: string;
  name: string;
};

const links: NavItems[] = [
  {
    link: "/dashboard",
    name: "Dashboard",
  },
  {
    link: "/dashboard",
    name: "Plants",
  },
  {
    link: "/dashboard",
    name: "Planning",
  },
  {
    link: "/dashboard",
    name: "Live Feed",
  },
];
function NavBar() {
  return (
    <div className="relative w-fit h-full p-4 pr-8 ">
      <div className="flex flex-col items-center justify-between">
        <div className="flex flex-col items-center gap-4">
          <a href="/">
            <Image
              alt="Logo"
              width={100}
              height={100}
              src="/update_logo.png"
              className=""
              role="button"
            />
          </a>
          <nav>
            <ul className="flex flex-col gap-4">
              {Object.entries(links).map(([loc, nav_item]) => (
                <li
                  key={loc}
                  className="font-bold w-auto p-3 hover:underline hover:text-green-background"
                >
                  <Link href={nav_item.link} className="text-xl">
                    {nav_item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="">
          <ThemeToggleButton />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
