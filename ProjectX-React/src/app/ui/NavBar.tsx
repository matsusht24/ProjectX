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
    <div className="relative w-full h-fit p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
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
            <ul className="flex gap-4">
              {Object.entries(links).map(([loc, nav_item]) => (
                <li
                  key={loc}
                  className="font-bold w-auto p-3 rounded-full shadow-neo-dark  hover:shadow-glow"
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
