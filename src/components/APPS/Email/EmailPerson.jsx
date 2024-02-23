import React, { useState } from "react";
import { Link } from "react-router-dom";
function EmailPerson({ emailPeople }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  const filteredEmailPeople = emailPeople.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="">
      <div className="border border-indigo-200 flex gap-3 py-2 items-center rounded-lg px-3 mb-5 m-5">
        <i className="fi fi-rr-search"></i>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border-none outline-none focus:ring-0 placeholder:text-sm font-sm"
        />
      </div>
      <div className="overflow-y-auto h-[700px] flex flex-col">
        {filteredEmailPeople.map((profile, index) => (
          <Link
            key={index}
            to=""
            onClick={() => handleLinkClick(index)}
            className={`block px-5 py-4 flex gap-3 px-5 py-4 justify-between group ${
              activeLink === index
                ? "bg-gray-100"
                : "bg-white-500 hover:bg-indigo-50"
            }`}
          >
            <div class="flex items-start relative top-1.5">
              <input
                id="laravel-checkbox-list"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex">
                <div className="flex flex-col">
                  <h3 className="font-semibold text-sm group-hover:text-indigo-500">
                    {profile.name}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-indigo-400">
                    {profile.subSlug}
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <span className="text-gray-500 text-sm">
                    {profile.icon[0]}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {profile.icon[1]}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-end">
              <div>
                {/* Conditional rendering for label color */}
                {profile.label === "Social" && (
                  <p className="text-xs text-white bg-red-400 px-2 py-0.5 rounded-full">
                    {profile.label}
                  </p>
                )}
                {profile.label === "Health" && (
                  <p className="text-xs text-white bg-teal-400 px-2 py-0.5 rounded-full">
                    {profile.label}
                  </p>
                )}
                {profile.label === "Promotional" && (
                  <p className="text-xs text-white bg-blue-400 px-2 py-0.5 rounded-full">
                    {profile.label}
                  </p>
                )}
              </div>
              <div>
                <p className="text-gray-700 text-xs font-semibold">
                  {profile.time}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EmailPerson;
