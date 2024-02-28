import React from "react";

function Invoice() {
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
      </div>
    </div>
  );
}

export default Invoice;
