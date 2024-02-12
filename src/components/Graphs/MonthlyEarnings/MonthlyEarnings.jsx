import React from "react";
import ReactApexChart from "react-apexcharts";
import "@flaticon/flaticon-uicons/css/all/all.css";
import Normal from "./Monthly";
function MonthlyEarnings() {
  return (
    <div>
      <div className="shadow-sm rounded-lg border border-indigo-100 border-0.5 flex flex-col">
        <div id="chart-yearly" className="flex justify-between gap-4 px-5 pt-5">
          <div className="min-w-36 flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Monthly Earnings</h3>
              <p className="text-xl font-semibold">$6,820</p>
            </div>
            <div className="flex items-center gap-1 pt-3">
              <span className="">
                <i className="fi fi-bs-arrow-up-left text-red-400 text-xs font-base h-5 w-5 bg-red-100 rounded-full flex items-center justify-center"></i>
              </span>{" "}
              <p className="text-sm text-gray-600 ">
                <span className="text-gray-900">+9%</span> last year
              </p>
            </div>
          </div>
          <div>
            <div className="w-14 h-14 bg-blue-500 flex justify-center items-center rounded-full">
              <i className="fi fi-rr-dollar text-2xl text-white"></i>
            </div>
          </div>
        </div>
        <Normal />
      </div>
    </div>
  );
}

export default MonthlyEarnings;
