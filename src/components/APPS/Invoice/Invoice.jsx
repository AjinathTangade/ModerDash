import React from "react";
import { Link } from "react-router-dom";
import EmailPerson from "../Email/EmailPerson";
import { invoice } from "@/data/data";
import { invoiceTable } from "@/data/data";

function Invoice() {
  return (
    <div className="w-full xl:w-7/12 xl:mx-auto mt-32 mb-20 ">
      <div className="flex flex-col gap-10 ">
        <div className="px-5 bg-indigo-50 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 flex-col">
              <h4 className="text-xl font-semibold leading">Invoice</h4>
              <div className="flex gap-2 items-center">
                <Link to="/" className="text-sm text-indigo-500">
                  Home
                </Link>{" "}
                <span>/</span>
                <p className="text-sm text-gray-600">Invoice</p>
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
        <div className="border rounded-md flex w-full h-[920px]">
          <div className="w-3/12">
            <EmailPerson emailPeople={invoice} />
          </div>

          <div className="w-9/12 border border-l border-y-0 border-r-0">
            <div className="flex justify-between px-3 h-full max-h-16 items-center border-b">
              <h3 className="font-medium text-lg text-gray-700">INVOICE</h3>
              <h3 className="font-medium text-lg text-gray-700">#123</h3>
            </div>
            <div className="p-5">
              <div className="flex">
                <div className="w-full max-w-36 flex flex-col gap-1">
                  <h5 className="font-medium text-sm">From,</h5>
                  <h5 className="font-medium text-sm">Steve Jobs</h5>
                  <p className="text-sm text-gray-500">
                    1108, Clair Street, Massachusetts, Woods Hole - 02543
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="flex flex-col gap-4 w-full max-w-48">
                  <div className=" flex flex-col gap-1 items-end">
                    <h5 className="font-medium text-sm">To,</h5>
                    <h5 className="font-medium text-sm">James Anderson,</h5>
                    <p className="text-sm text-gray-500 text-end">
                      455, Shobe Lane, Colorado, Fort Collins - 80524
                    </p>
                  </div>
                  <div className="text-end">
                    <p className="text-sm text-gray-500">
                      Invoice Date : 23rd Jan 2024
                    </p>
                    <p className="text-sm text-gray-500">
                      Due Date : 25th Jan 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto px-5">
              <table className="min-w-full divide-y divide-gray-200 mt-14 mb-10">
                <thead className="">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      Unit Cost
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      Total
                    </th>
                  </tr>
                </thead>
                {invoiceTable.map((table, index) => (
                  <tbody
                    className="bg-white divide-y divide-gray-200"
                    key={index}
                  >
                    <tr className="hover:bg-gray-50 border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-700">
                        {table.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-700">
                        {table.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-700">
                        {table.quantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-700">
                        {table.unit}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-700">
                        {table.total}
                      </td>
                    </tr>

                    {/* Add more rows as needed */}
                  </tbody>
                ))}
              </table>
              <div className="pb-5">
                <div className="flex justify-end">
                  <div className="flex flex-col gap-4 w-full">
                    <div className="text-end flex flex-col gap-2 border-b pb-5">
                      <p className="text-sm text-gray-500">
                        Sub - Total amount: $20,858
                      </p>
                      <p className="text-sm text-gray-500">
                        vat (10%) : $2,085
                      </p>
                    </div>
                    <div className=" border-b text-end pb-5">
                      <h3 className="font-bold text-xl">Total : $22,943</h3>
                    </div>
                    <div className="flex justify-end items-end gap-5">
                      <button className="text-sm font-semibold bg-red-100 px-6 py-3 rounded-lg text-red-500 hover:bg-red-400 hover:text-white">Procced to payment </button>
                      <button className="text-sm font-semibold bg-blue-500 px-5 py-3 rounded-lg text-white hover:bg-blue-700 flex gap-2 items-center"><i class="fi fi-rr-print"></i>Print</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
