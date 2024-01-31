import React from "react";
import { Link } from "react-router-dom";
import { sideBarLinks, sideBarLinksHome } from "@/data/data";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="w-1/6 border-r border-indigo-100 py-5 relative h-screen flex flex-col">
      <div className="">
        <Link
          to="/"
          className="text-2xl font-bold flex gap-2 items-center"
        >
          <img src="logo.png" alt="logo-sidebar" />
          <span>ModerDash</span>
        </Link>
      </div>
      <div className="overflow-y-auto h-screen sticky top-16 min-w-60">
        <nav>
          <ul className="my-5">
            <h3 className="font-semibold pb-3">Home</h3>
            {sideBarLinksHome.map((link, index) => (
              <li
                key={index}
                className="flex gap-4 py-3 items-center mr-4 px-3 rounded-lg hover:cursor-pointer hover:bg-indigo-50 hover:text-indigo-600"
              >
                <span>{link.icon}</span>
                <NavLink href={link.href} className="text-sm font-medium">
                  {link.label}
                </NavLink>
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
                <NavLink href={link.href} className="text-sm font-medium">
                  {link.label}
                </NavLink>
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
                <NavLink href={link.href} className="text-sm font-medium">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
