import React, { useEffect } from "react";
// import NavBar from "../NavBar/NavBar";
import SliderComponent from "../SliderComponent/SliderComponent";
import RevenueUpdates from "../Graphs/RevenueUpdates/RevenueUpdates";
import YearlyBreakup from "../Graphs/YearlyBreakup/YearlyBreakup";
import MonthlyEarnings from "../Graphs/MonthlyEarnings/MonthlyEarnings";
import EmployeeSalary from "../Graphs/Employee Salary/EmployeeSalary";
import Customers from "../Graphs/Customers/Customers";
import Projects from "../Graphs/Projects/Projects";
import SuperAwesome from "../SuperAwesome/SuperAwesome";
import BestSellingProducts from "../BestSellingProducts/BestSellingProducts";
import TopPerformers from "../TopPerformers/TopPerformers";
import Notification from "../Notification/Notification";

function Dashboard() {

  return (
    <div className="xl:w-5/6">   
      <div className="relative top-0 xl:top-14">
        <div className="w-full xl:w-10/12 xl:mx-auto flex flex-col gap-6">
          <div className="">
            <SliderComponent />
          </div>
          <div className="w-full xl:w-12/12  lg:flex gap-5 justify-between mx-2">
            <div className="flex flex-col gap-6">
              <div>
                <RevenueUpdates />
              </div>
              <div className="flex flex-col lg:grid grid-cols-2 gap-5">
                <div>
                  <EmployeeSalary />
                </div>

                
                <div className="flex flex-col gap-5 ">
                  <div className="flex gap-5 justify-between w-full">
                    <div className="w-6/12">
                      <Customers />
                    </div>
                    <div className="w-6/12">
                      <Projects />
                    </div>
                  </div>
                  <div>
                    <SuperAwesome />
                  </div>
                </div>
              </div>
              <Notification/>
            </div>
           
            <div className="flex flex-col gap-6 lg:w-4/12 mt-5 lg:mt-0">
              <div>
                <MonthlyEarnings />
              </div>
              <div>
                <YearlyBreakup />
              </div>
              <div>
                <BestSellingProducts />
              </div>
            </div>
          </div>
          <div className="mx-2 mb-20">
            <TopPerformers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
