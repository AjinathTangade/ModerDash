import React from "react";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { userProfile } from "@/data/data";

import "@flaticon/flaticon-uicons/css/all/all.css";
export default function UserProfile() {
  return (
    <div className=" text-right">
      <Menu as="div" className="relative inline-block text-left ">
        <div>
          <Menu.Button className="inline-flex w-full justify-center items-center relative">
            <span>
              <img
                src="/user-1.jpg"
                alt="user-profile"
                className="w-9 rounded-full m-2"
              />
            </span>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          className="w-96 p-6 "
        >
          <Menu.Items className="absolute mt-0.5 right-0 w-56 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="">
              <div>
                <h3 className="text-lg font-semibold flex gap-2 text-gray-700">
                  User Profile
                </h3>
              </div>
              <div className="flex gap-5 items-center mt-5 pb-4">
                <div>
                  <img
                    src="/user-1.jpg"
                    alt="user-profile"
                    className="w-20 rounded-full m-2"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-sm text-gray-600 font-semibold">
                    Mathew Anderson
                  </h3>
                  <p className="text-sm text-gray-500 font-light">Designer</p>
                  <p className="text-sm text-gray-500 font-light flex items-center gap-2">
                    <span>
                      <i class="fi fi-rr-envelope"></i>
                    </span>
                    info@moderdash.com
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-6 py-6">
                {userProfile.map((profile, index) => (
                  <Link to="/" key={index}>
                    <div
                      key={index}
                      className="px-1 flex gap-5 items-center gap-4"
                    >
                      <div className="bg-gray-100 h-12 w-12 flex items-center justify-center rounded-md">
                        <img src={profile.img} alt={profile.title} />
                      </div>
                      <div className="flex">
                        <span className="text-sm font-semibold text-gray-700 flex flex-col gap-2">
                          {profile.title}
                          <span className="text-xs font-semibold text-gray-400">
                            {profile.desc}
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-indigo-50 rounded-lg">
              <div className="flex items-center gap-5">
                <div className="flex flex-col items-center gap-3 py-5">
                  <h3 className="text-md font-semibold text-gray-700 text-center px-5">
                    Unlimited Access
                  </h3>
                  <button className="bg-blue-500 p-2 rounded-lg text-white text-sm w-20">
                    Upgrade
                  </button>
                </div>
                <div>
                  <img src="/unlimited-bg.png" alt="unlimited-bg" />
                </div>
              </div>
            </div>
            <div className="flex text-center mt-5">
              <Link
                to="/"
                className="border border-indigo-400 rounded-md p-2 w-full text-indigo-500 text-sm font-medium hover:bg-indigo-500 hover:text-white"
              >
                Log Out
              </Link>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
