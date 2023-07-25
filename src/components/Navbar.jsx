import React, { useState } from "react";
import hamburgerMenu from "../assets/hamburgerMenu.svg";
import close from "../assets/close.svg";
import hip from "../assets/hip.svg";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleclick = () => setToggle(!toggle);
  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="md:max-w-[1240px] max-w-[600px] m-auto w-full h-full flex justify-between items-center">
        <img src={hip} className="w-32 h-32" />
        <h1 className="text-2xl	font-bold text-emerald-600 border mx-11">
          ResearchSity
        </h1>
        <div className="hidden md:flex items-center">
          <ul className="flex gap-20 text-2xl">
            <li className="hover:bg-gray-100 hover:cursor-pointer hover:rounded-xl">
              Home
            </li>
            <li className="hover:bg-gray-100 hover:cursor-pointer hover:rounded-xl">
              About
            </li>
            <li className="hover:bg-gray-100 hover:cursor-pointer hover:rounded-xl">
              Services
            </li>
            <li className="hover:bg-gray-100 hover:cursor-pointer hover:rounded-xl">
              Contact Us
            </li>
          </ul>
        </div>

        <div className="md:hidden" onClick={handleclick}>
          <img src={toggle ? close : hamburgerMenu} className="" />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4 bg-white w-full px-8 h-full md:hidden"
            : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100">Home</li>
          <li className="p-4 hover:bg-gray-100">About</li>
          <li className="p-4 hover:bg-gray-100">Services</li>
          <li className="p-4 hover:bg-gray-100">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
