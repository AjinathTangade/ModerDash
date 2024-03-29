import React from "react";
import { topPerformers } from "@/data/data";
function TopPerformers() {
  return (
    <div className="w-full xl:mx-auto ">
      <div className="shadow-sm rounded-lg border border-indigo-100 border-0.5 p-5 flex flex-col gap-11">
        <div className="flex flex-col gap-5">
          <div>
            <h4 className="text-xl font-semibold leading">Top Performers</h4>
            <p className="text-sm text-gray-600">Best Employees</p>
          </div>
          <div>
            <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-semibold text-gray-700 uppercase"
                          >
                            Assigned
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-semibold text-gray-700 uppercase"
                          >
                            Project
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-semibold text-gray-700 uppercase"
                          >
                            Task
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-semibold text-gray-700 uppercase"
                          >
                            Priority
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-semibold text-gray-700 uppercase"
                          >
                            Budget
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {topPerformers.map((profile, index) => (
                          <tr
                            className="hover:bg-gray-100 dark:hover:bg-gray-700"
                            key={index}
                          >
                            <td className="px-6 py-3 whitespace-nowrap text-sm font-semibold text-gray-700 dark:text-gray-200">
                              <div className="flex gap-5 items-center">
                                <div className="h-14 w-14">
                                  <img
                                    src={profile.img}
                                    alt={profile.role}
                                    className="h-14 w-14 rounded-full"
                                  />
                                </div>
                                <div>
                                  {profile.name}
                                  <p className="text-gray-500 font-normal text-sm">
                                    {profile.role}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                              {profile.project}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                              {profile.task}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                              {profile.prority}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                              {profile.budget}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default TopPerformers;
