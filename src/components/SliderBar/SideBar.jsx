import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sideBarLinks, sideBarLinksHome } from "@/data/data";
import "@flaticon/flaticon-uicons/css/all/all.css";

function SideBar() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="hidden xl:block w-1/6 relative h-screen">
      <div className="relative flex flex-col hidden xl:block ">
        <div className="fixed h-20">
          <Link
            to="/"
            className="text-2xl font-bold flex gap-2 items-center h-16"
          >
            <img src="logo.png" alt="logo-sidebar" />
            <span>ModerDash</span>
          </Link>
        </div>
        <div
          className={`h-screen fixed top-16 w-1/6 sidebar border-r border-indigo-100 ${
            isHovered ? "overflow-y-auto" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <nav>
            <ul className="my-5">
              <h3 className="font-semibold pb-3">Home</h3>
              {sideBarLinksHome.map((link, index) => (
                <li
                  key={index}
                  className="flex gap-4 py-3 items-center mr-4 px-3 rounded-lg hover:cursor-pointer hover:bg-indigo-50 hover:text-indigo-600"
                >
                  <span>{link.icon}</span>
                  <Link to={link.href} className="text-sm font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="my-5">
              <h3 className="font-semibold pb-3">Apps</h3>
              {sideBarLinks.map((link, index) => (
                <li
                  key={index}
                  className="flex gap-4 py-3 items-center mr-4 px-3 rounded-lg hover:cursor-pointer hover:bg-indigo-50 hover:text-indigo-600"
                >
                  <span>{link.icon}</span>
                  <Link to={link.href} className="text-sm font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="fixed h-24 bottom-0 z-20 bg-white w-80 flex justify-center items-center ">
        <div className="w-52 h-16 bg-indigo-50 flex justify-center items-center rounded-lg">
          <div className="flex gap-4 items-center justify-center">
            <div className="">
              <img
                src="/user-1.jpg"
                alt="logo-sidebar"
                className="h-11 w-11 rounded-full"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium">Mathew</h4>
              <p className="text-gray-500 font-normal text-sm">Designer</p>
            </div>
            <div>
              <Link
                to="/"
                className="text-2xl font-bold flex gap-2 items-center text-red-500"
              >
                <i class="fi fi-rr-power text-indigo-600 text-lg"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
