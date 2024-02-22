import React from "react";
import { userChat } from "@/data/data";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { DropdownMenuDemo } from "./DropdownMenuDemo";
function Chat() {
  return (
    <div className="w-full xl:w-7/12 xl:mx-auto mt-32 mb-20">
      <div className="flex flex-col gap-10 ">
        <div className="px-5 bg-indigo-50 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-xl font-semibold leading">Chat </h4>
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
        <div className="flex">
          <div className="border flex flex-col w-80">
            <div className="flex justify-between h-18 px-5 py-4 gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12">
                  <img
                    src="/user-1.jpg"
                    alt="user-1"
                    className="rounded-full"
                  />
                  <span class="relative flex h-2 w-2 left-10 top-[-5px]">
                    <span class="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
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
            {userChat.map((profile, index) => (
              <div
                className="flex justify-between h-18 px-5 py-4 bg-gray-50"
                key={index}
              >
                <div className="flex gap-4 items-center">
                  <div className="h-12 w-12">
                    <img
                      src={profile.img}
                      alt={profile.desc}
                      className="rounded-full"
                    />
                    <span class="relative flex h-2 w-2 left-10 top-[-5px]">
                      <span class="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-sm">{profile.title}</h3>
                    <p className="text-xs text-gray-500">{profile.desc}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-xs text-gray-700">{profile.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border">afdadfasdfasfafds</div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
