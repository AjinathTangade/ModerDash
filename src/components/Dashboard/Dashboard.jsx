import React from "react";
import NavBar from "../NavBar/NavBar";
import SliderComponent from "../SliderComponent/SliderComponent";
import RevenueUpdates from "../Graphs/RevenueUpdates/RevenueUpdates";
import YearlyBreakup from "../Graphs/YearlyBreakup/YearlyBreakup";
import MonthlyEarnings from "../Graphs/MonthlyEarnings/MonthlyEarnings";
import Test from "../Graphs/MonthlyEarnings/Test";
import EmployeeSalary from "../Graphs/Employee Salary/EmployeeSalary";

function Dashboard() {
  return (
    <div className="xl:w-5/6">
      <NavBar />
      <div className="relative top-0 xl:top-16">
        <div className="w-full xl:w-9/12 xl:mx-auto flex flex-col gap-10">
          <div className="">
            <SliderComponent />
          </div>
          <div className="flex gap-5 justify-between mx-2">
            <div className="flex flex-col gap-6">
              <div>
                <RevenueUpdates />
              </div>
              <div className="mb-20 grid grid-cols-2">
                <div>
                  <EmployeeSalary />
                </div>
                <div>
                {/* <EmployeeSalary /> */}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 w-4/12">
              <div>
                <MonthlyEarnings />
              </div>
              <div>
                <YearlyBreakup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
