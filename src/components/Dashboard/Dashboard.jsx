import React from "react";
import NavBar from "../NavBar/NavBar";
import SliderComponent from "../SliderComponent/SliderComponent";
import RevenueUpdates from "../Graphs/RevenueUpdates/RevenueUpdates";

function Dashboard() {
  return (
    <div className="xl:w-5/6">
      <NavBar />
      <div className="relative top-0 xl:top-16">
        <div className="w-full xl:w-9/12 xl:mx-auto flex flex-col gap-10">
          <div className="">
            <SliderComponent />
          </div>
          <div className="flex gap-5 justify-between">
            <div>
              <RevenueUpdates />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia neque amet unde aliquam explicabo reiciendis consequatur doloribus, odio eos eius?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
