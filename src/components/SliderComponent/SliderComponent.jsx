import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slidesData } from "../../data/data";

function SliderComponent() {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-20">
      <Slider {...sliderSettings}>
        {slidesData.map((slide, index) => (
          <div key={index}>
            <div
              className={`bg-${slide.bgColor} min-h-44 w-44 flex flex-col items-center justify-center rounded-lg gap-3 mx-2`}
            >
              <div>
                <img src={slide.icon} alt={slide.title} />
              </div>
              <div className="flex flex-col items-center">
                <p
                  className={`text-md text-${
                    slide.bgColor.split("-")[0]
                  }-400 font-semibold`}
                >
                  {slide.title}
                </p>
                <h5
                  className={`text-lg text-${
                    slide.bgColor.split("-")[0]
                  }-500 font-semibold`}
                >
                  {slide.value}
                </h5>
              </div>
            </div>
            <span className="bg-teal-100 bg-orange-100 bg-rose-100 bg-indigo-50 text-indigo-400 text-indigo-500 text-teal-400 text-teal-500 text-rose-400 text-rose-500 text-orange-400 text-orange-500"></span>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponent;
