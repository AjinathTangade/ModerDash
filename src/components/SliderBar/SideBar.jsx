import React from "react";
import { Link } from "react-router-dom";
import { sideBarLinks, sideBarLinksHome } from "@/data/data";
import "@flaticon/flaticon-uicons/css/all/all.css";

function SideBar() {
  return (
    <div className="min-w-60 border-r border-indigo-100 py-5">
      <div>
        <Link className="text-2xl font-bold">ModerDash</Link>
      </div>
      <nav>
        <ul className="my-5">
          <h3 className="font-semibold pb-3">Home</h3>
          {sideBarLinksHome.map((link, index) => (
            <li key={index} className="flex gap-4 py-3 items-center mr-4 px-3 rounded-lg hover:cursor-pointer hover:bg-indigo-50 hover:text-indigo-600">
              <span>{link.icon}</span>
              <a href={link.href} className="text-sm font-medium">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ul>
          <h3 className="font-semibold pb-3">Apps</h3>
          {sideBarLinks.map((link, index) => (
            <li key={index} className="flex gap-4 py-3 items-center mr-4 px-3 rounded-lg hover:cursor-pointer hover:bg-indigo-50 hover:text-indigo-600">
              <span>{link.icon}</span>
              <a href={link.href} className="text-sm font-medium">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
