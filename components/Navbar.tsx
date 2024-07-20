"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "team", path: "#team" },
  { name: "services", path: "#services" },
  { name: "gallery", path: "#gallery" },
];

export const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <header className="w-full fixed bg-blue-300 md:shadow-lg px-4 border-b  ">
      <nav className="flex max-w-[1200px] items-center mx-auto">
        <div className="text-lg font-bold md:py-0 py-4">Saravan RC</div>
        <ul className="hidden md:px-2 ml-auto md:flex md:space-x-2">
          {navLinks.map(({ name, path }, i) => (
            <li key={i}>
              <Link
                href={path}
                className="flex capitalize md:inline-flex p-4 items-center"
              >
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="ml-auto md:hidden text-gray-500 cursor-pointer"
          onClick={() => setMobile(!mobile)}
        >
          {mobile ? <X /> : <Menu />}
        </div>
      </nav>
      {mobile && (
        <ul className="ml-auto flex flex-col gap-3 pb-4">
          {navLinks.map(({ name, path }, i) => (
            <>
              <li key={i}>
                <Link href={path} className="flex py-1 capitalize items-center">
                  <span>{name}</span>
                </Link>
              </li>
            </>
          ))}
        </ul>
      )}
    </header>
  );
};
