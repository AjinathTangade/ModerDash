import React from "react";
import EmailMenu from "./EmailMenu";

function Email() {
  return (
    <div className="w-full xl:w-7/12 xl:mx-auto mt-32 mb-20 ">
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
        <div className="border rounded-md flex h-[800px]">
          <div className="flex-initial w-56"><EmailMenu /></div>
          <div className="flex-initial w-80 border border-y-0 p-5">2</div>
          <div className="grow p-5">1</div>
        </div>
      </div>
    </div>
  );
}

export default Email;
