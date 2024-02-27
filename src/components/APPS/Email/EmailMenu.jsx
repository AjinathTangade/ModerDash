import React, { useState } from "react";
import { Link } from "react-router-dom";
import { emailLinks } from "@/data/data";
function EmailMenu({ emailLinks }) {
  if (!emailLinks) {
    return null;
  }

  return (
    <div className="">
      <div className="px-5 pt-5 mb-5">
        <div className="flex justify-center">
          <Link
            to=""
            className="bg-blue-500 text-sm font-medium text-white p-3 rounded-lg w-full text-center"
          >
            Compose
          </Link>
        </div>
      </div>

      <div className="overflow-y-auto h-screen">
        <div className="px-5 pb-3 border-b">
          <div className="flex flex-col">
            {emailLinks.slice(0, 4).map((link, index) => (
              <div className="" key={index}>
                <Link
                  to={link.href}
                  className="flex items-center gap-4 px-4 h-11 text-gray-600 hover:bg-indigo-50 rounded-lg"
                >
                  <span>{link.icon}</span>
                  <span className="font-medium text-sm">{link.label}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-4 px-5 pb-3 border-b">
          <div className="px-4">
            <h3 className="font-medium text-xs">IMPORTANT</h3>
          </div>
          <div className="mt-3">
            {emailLinks.slice(5, 7).map((link, index) => (
              <div className="" key={index}>
                {/* Corrected to={link.href} */}
                <Link
                  to={link.href}
                  className="flex items-center gap-4 px-4 h-11 text-gray-600 hover:bg-indigo-50 rounded-lg"
                >
                  <span>{link.icon}</span>
                  <span className="font-medium text-sm">{link.label}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-4 px-5 pb-3">
          <div className="px-4">
            <h3 className="font-medium text-xs">LABELS</h3>
          </div>
          <div className="mt-3">
            {emailLinks.slice(7, 11).map((link, index) => (
              <div className="" key={index}>
                {/* Corrected to={link.href} */}
                <Link
                  to={link.href}
                  className="flex items-center gap-4 px-4 h-11 text-gray-600 hover:bg-indigo-50 rounded-lg"
                >
                  <span>{link.icon}</span>
                  <span className="font-medium text-sm">{link.label}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailMenu;
