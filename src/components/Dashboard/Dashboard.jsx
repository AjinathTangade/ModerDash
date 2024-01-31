import React from "react";
import NavBar from "../NavBar/NavBar";
import SliderComponent from "../SliderComponent/SliderComponent";
import { Carousel } from "../ui/carousel";
import Slider from "../SliderComponent/Slider";
import CardDemo from "../SliderComponent/CardDemo";


function Dashboard() {
  return (
    <div className="pb-5 w-5/6">
      <NavBar />
      <div className="relative top-16">
        <div className="w-full">
          <div className="w-8/12 mx-auto">
            <Slider/>
            <CardDemo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
