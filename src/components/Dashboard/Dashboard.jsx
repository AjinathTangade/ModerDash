import React from "react";
import NavBar from "../NavBar/NavBar";
import SliderComponent from "../SliderComponent/SliderComponent";

function Dashboard() {
  return (
    <div className="xl:w-5/6">
      <NavBar />
      <div className="relative top-0 xl:top-16">
        <div className="w-full ">
          <div className="mx-5 xl:w-9/12 xl:mx-auto ">
            <SliderComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
