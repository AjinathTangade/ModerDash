import React, { useState } from "react";
import { userChat } from "@/data/data";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { DropdownMenuDemo } from "./DropdownMenuDemo";
import { RecentChats } from "./RecentChats";
import { Link } from "react-router-dom";

function Chat() {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <div className="w-9/12 xl:w-8/12 xl:mx-auto mt-32 mb-20">
      <div className="flex flex-col gap-10 ">
        <div className="px-5 bg-indigo-50 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-xl font-semibold leading">Chat</h4>
              <p className="text-sm text-gray-600">Best Employees</p>
            </div>
            <div>
              <img
                src="/ChatBc.png"
                alt="calender-img"
                className="h-24 lg:h-36"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:h-[800px]">
          <div className="border lg:w-80">
            <div className="px-5 py-4 flex flex-col gap-5">
              <div className="flex justify-between h-18 gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12">
                    <img
                      src="/user-1.jpg"
                      alt="user-1"
                      className="rounded-full"
                    />
                    <span className="relative flex h-2 w-2 left-10 top-[-5px]">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-sm">Mathew Anderson</h3>
                    <p className="text-xs text-gray-500">Marketing Director</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <DropdownMenuDemo />
                </div>
              </div>
              <div className="border border-indigo-200 flex gap-3 py-2 items-center rounded-lg px-3">
                <i className="fi fi-rr-search"></i>
                <input
                  type="text"
                  placeholder="Search Contact"
                  className="w-full border-none outline-none focus:ring-0 placeholder:text-sm font-sm"
                />
              </div>
              <div>
                <RecentChats />
              </div>
            </div>
            <div className="overflow-y-auto md:h-screen">
              {userChat.map((profile, index) => (
                <div className="group" key={index}>
                  <Link
                    to=""
                    onClick={() => handleLinkClick(index)}
                    className={`block px-5 py-4 ${
                      activeLink === index
                        ? "bg-gray-100"
                        : "bg-white-500 hover:bg-indigo-50"
                    }`}
                  >
                    <div className="flex justify-between h-18 ">
                      <div className="flex gap-4 items-center">
                        <div className="h-12 w-12">
                          <img
                            src={profile.img}
                            alt={profile.desc}
                            className="rounded-full"
                          />
                          <span className="relative flex h-2 w-2 left-10 top-[-5px]">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="font-semibold text-sm group-hover:text-indigo-500">
                            {profile.title}
                          </h3>
                          <p className="text-xs text-gray-500 group-hover:text-indigo-400">
                            {profile.desc}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <p className="text-xs text-gray-700">{profile.time}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="border-l-0 border flex-grow">
            <div className="flex flex-col justify-between h-full">
              <div className="flex justify-between px-5 pt-5 pb-4 border-x md:border-b">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12">
                    <img
                      src="/user-1.jpg"
                      alt="user-1"
                      className="rounded-full"
                    />
                    <span className="relative flex h-2 w-2 left-10 top-[-5px]">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-sm">Mathew Anderson</h3>
                    <p className="text-xs text-gray-500">Away</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="h-12 w-12 hover:bg-indigo-50 rounded-full hover:text-indigo-400 flex items-center justify-center">
                    <i className="fi fi-rr-phone-call text-xl "></i>
                  </div>
                  <div className="h-12 w-12 hover:bg-indigo-50 rounded-full hover:text-indigo-400 flex items-center justify-center">
                    <i className="fi fi-rr-video-camera-alt text-xl"></i>
                  </div>
                  <div className="h-12 w-12 hover:bg-indigo-50 rounded-full hover:text-indigo-400 flex items-center justify-center">
                    <i className="fi fi-br-menu-burger text-xl"></i>
                  </div>
                </div>
              </div>
   <div className="flex justify-between h-16 px-5 py-4 border-x md:border-t">
                <div className="flex gap-3 py-2 items-center px-3 w-full">
                  <i className="fi fi-rr-smile text-xl"></i>
                  <input
                    type="text"
                    placeholder="Type a Message"
                    className="w-full border-none outline-none focus:ring-0 placeholder:text-sm font-sm"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <div className="h-12 w-12 hover:bg-indigo-50 rounded-full hover:text-indigo-400 flex items-center justify-center">
                    <i class="fi fi-rr-add-image text-xl"></i>
                  </div>
                  <div className="h-12 w-12 hover:bg-indigo-50 rounded-full hover:text-indigo-400 flex items-center justify-center">
                    <i class="fi fi-rr-clip text-xl"></i>
                  </div>
                  <div className="h-12 w-12 hover:bg-indigo-50 rounded-full hover:text-indigo-400 flex items-center justify-center">
                    <i class="fi fi-rs-circle-microphone text-xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
