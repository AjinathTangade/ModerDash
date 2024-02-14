import React from "react";

function BestSellingProducts() {
  return (
    <div>
      <div className="rounded-lg p-5 flex flex-col gap-7 bg-blue-500">
        <div className="flex items-center">
          <div>
            <h4 className="text-lg font-semibold text-white leading">
              Best Selling Products
            </h4>
            <p className="text-sm text-white ">Overview 2024</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            <img
              src="/piggy.png"
              alt="Best-Selling-Products-img"
              className="h-28"
            />
          </div>
          <div className="bg-white p-3 rounded-lg">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-md font-semibold">MaterialPro</h4>
                  <p className="text-sm ">Overview 2024</p>
                </div>
                <div>
                  <h5 className="text-sm font-semibold p-2 bg-indigo-100 text-indigo-400 rounded-lg">
                    55%
                  </h5>
                </div>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                <div class="bg-blue-400 h-1 rounded-full dark:bg-white w-[90px] "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSellingProducts;
