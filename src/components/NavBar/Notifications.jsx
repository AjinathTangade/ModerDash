import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { userNotification } from "@/data/data";
export default function Notifications() {
  return (
    <div className=" text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center items-center relative rounded-full text-lg font-semibold hover:bg-indigo-100 hover:text-indigo-500 focus:outline-none h-10 p-3">
            <span>
              <i className="fi fi-rs-bell"></i>
            </span>
            <span className="absolute top-1 right-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full  w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400"></span>
              </span>
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
          className="w-96 p-6"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <Menu.Item>
              <div>
                <div className="mt-3 lg:m-0 pb-0 flex items-center justify-between">
                  <h3 className="text-lg font-semibold flex gap-2">
                    Notifications
                  </h3>
                  <span className="bg-blue-500 px-3 py-1 text-white rounded-full font-medium text-sm flex">
                    5 new
                  </span>
                </div>
                <div className="flex flex-col gap-1 mt-5 overflow-y-auto h-80">
                  {userNotification.map((profile, ind) => (
                    <Link className="group" key={ind}>
                      <div
                        
                        className="p-3 flex gap-3 items-center gap-4 group-hover:bg-gray-50 group-hover:rounded-lg"
                      >
                        <div className="bg-gray-100 h-14 w-14 flex items-center justify-center rounded-full">
                          <img src={profile.img} alt={profile.title} className="rounded-full"/>
                        </div>
                        <div className="flex">
                          <span className="text-sm font-semibold text-gray-700 flex flex-col gap-2 group-hover:text-indigo-500">
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
                <div className="flex text-center mt-5">
                    <Link
                      to="/"
                      className="border border-indigo-400 rounded-md p-2 w-full text-indigo-500 text-sm font-medium hover:bg-indigo-500 hover:text-white"
                    >
                      See All Notifications
                    </Link>
                  </div>
              </div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
