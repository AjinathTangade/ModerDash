import React from "react";
import NavBar from "../NavBar/NavBar";
import SliderComponent from "../SliderComponent/SliderComponent";
import RevenueUpdates from "../Graphs/RevenueUpdates/RevenueUpdates";
import YearlyBreakup from "../Graphs/YearlyBreakup/YearlyBreakup";

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
              <RevenueUpdates />
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <YearlyBreakup />
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
