import React from "react";
import EmailMenu from "./EmailMenu";
import {emailPeople} from "@/data/data";
import {emailLinks} from "@/data/data";
import EmailPerson from "./EmailPerson";
import EmailMeassageBox from "./EmailMeassageBox";
function Email() {
  return (
    <div className="w-full w-9/12 xl:w-8/12 xl:mx-auto mt-32 mb-20 ">
      <div className="flex flex-col gap-10 ">
        <div className="px-5 bg-indigo-50 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-xl font-semibold leading">Email</h4>
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

        <div className="border rounded-md flex h-[800px] w-full">
          <div className="w-3/12">
            <EmailMenu emailLinks={emailLinks}/>
          </div>
          <div className=" w-5/12 border border-y-0 h-full">
            <EmailPerson emailPeople={emailPeople}/>
          </div>
          <div className="w-7/12">
            <EmailMeassageBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Email;
