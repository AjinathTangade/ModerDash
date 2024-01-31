import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SliderComponent() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Set the number of items to show at a time
        slidesToScroll: 1,
      };
  return (
    <div>
    <Slider {...sliderSettings}>
      <div>
        <div style={{ width: '200px', backgroundColor: 'red', padding: '20px' }}>
          <p>Your content for Slide 1 goes here</p>
        </div>
      </div>
      <div>
        <div style={{ width: '200px', backgroundColor: 'red', padding: '20px' }}>
          <p>Your content for Slide 2 goes here</p>
        </div>
      </div>
      <div>
        <div style={{ width: '200px', backgroundColor: 'red', padding: '20px' }}>
          <p>Your content for Slide 3 goes here</p>
        </div>
      </div>
      <div>
        <div style={{ width: '200px', backgroundColor: 'red', padding: '20px' }}>
          <p>Your content for Slide 3 goes here</p>
        </div>
      </div>
      <div>
        <div style={{ width: '200px', backgroundColor: 'red', padding: '20px' }}>
          <p>Your content for Slide 3 goes here</p>
        </div>
      </div>
      <div>
        <div style={{ width: '200px', backgroundColor: 'red', padding: '20px' }}>
          <p>Your content for Slide 3 goes here</p>
        </div>
      </div>
    </Slider>
   
    </div>
  );
}

export default SliderComponent;
