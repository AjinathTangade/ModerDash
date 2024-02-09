import React from "react";
import NavBar from "../NavBar/NavBar";
import SliderComponent from "../SliderComponent/SliderComponent";
import RevenueUpdates from "../Graphs/RevenueUpdates/RevenueUpdates";
import YearlyBreakup from "../Graphs/YearlyBreakup/YearlyBreakup";
import MonthlyEarnings from "../MonthlyEarnings/MonthlyEarnings";
import Test from "../MonthlyEarnings/Test";

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
            <div>
              <div>
                <RevenueUpdates />
              </div>
              <div>
                <Test />
              </div>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse in
                id eius praesentium repellendus mollitia dolore eum velit
                tempore repellat!
              </h1>
              <div>
                <MonthlyEarnings />
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
