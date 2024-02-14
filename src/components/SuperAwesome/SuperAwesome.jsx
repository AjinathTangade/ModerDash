import React from "react";
import { Link } from "react-router-dom";
import "@flaticon/flaticon-uicons/css/all/all.css";
function SuperAwesome() {
  return (
    <div className="shadow-sm rounded-lg border border-indigo-100 border-0.5 p-5 flex flex-col gap-11">
      <div className="flex items-center gap-5">
        <div>
          <img src="/user-1.jpg" alt="user" className="h-20 w-24 rounded-lg" />
        </div>
        <div>
          <h4 className="text-md font-semibold leading">
            Super awesome, Vue coming soon!
          </h4>
          <p className="text-sm text-gray-600">22 March, 2024</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex ">
          <img
            src="/user-2.jpg"
            alt="user"
            className="h-12 w-12 rounded-full"
          />
          <img
            src="/user-3.jpg"
            alt="user"
            className="h-12 w-12 rounded-full ml-[-5px] border-2 border-white"
          />
          <img
            src="/user-4.jpg"
            alt="user"
            className="h-12 w-12 rounded-full ml-[-5px] border-2 border-white"
          />
          <img
            src="/user-5.jpg"
            alt="user"
            className="h-12 w-12 rounded-full ml-[-5px] border-2 border-white"
          />
        </div>
        <div className="bg-gray-100 h-12 w-12 flex items-center justify-center rounded-lg">
          <Link to="/">
            <i className="fi fi-rr-comment-alt-dots text-blue-600"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SuperAwesome;
