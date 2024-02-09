import React from 'react';
import ReactApexChart from "react-apexcharts";
import "@flaticon/flaticon-uicons/css/all/all.css";
function MonthlyEarnings() {
  return (
    <div>
      <div className="shadow-md rounded-lg border border-indigo-100 border-0.5 p-5">
        <div id="chart-yearly" className="flex jusity-between gap-4">
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
            <div className="w-20 h-20">
            <i className="fi fi-rr-dollar"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonthlyEarnings;