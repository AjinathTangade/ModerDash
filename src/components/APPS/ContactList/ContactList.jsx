import React from "react";
import { Link } from "react-router-dom";
import { contactPeople, contactLinks } from "@/data/data";

import EmailMenu from "../Email/EmailMenu";
import EmailPerson from "../Email/EmailPerson";
import EmailMeassageBox from "../Email/EmailMeassageBox";
function ContactList() {
  return (
    <div className="w-full xl:w-7/12 xl:mx-auto mt-32 mb-20 ">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10 ">
          <div className="px-5 bg-indigo-50 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 flex-col">
                <h4 className="text-xl font-semibold leading">
                  Contact Application
                </h4>
                <div className="flex gap-2 items-center">
                  <Link to="/" className="text-sm text-indigo-500">Home</Link> <span>/</span>
                  <p className="text-sm text-gray-600">Contact Application</p>
                </div>
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
        </div>
        <div className="border rounded-md flex h-[800px] w-full">
          <div className="w-3/12">
            <EmailMenu emailLinks={contactLinks}/>
          </div>
          <div className=" w-5/12 border border-y-0 h-full">
            <EmailPerson emailPeople={contactPeople}/>
          </div>
          <div className="w-7/12">
            <EmailMeassageBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactList;
