import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderData from './data/sliderData';

function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <Slider {...settings}>
      {sliderData.map((slider, index) => {
        return (
          <div
            key={index}
            className="rounded-xl px-6 py-28 lg:px-40 w-full border border-[#7F7F7F] !flex flex-col items-center justify-center ">
            <p className="text-white text-2xl leading-[32px] text-center">
              {slider.text}
            </p>
            <p className="text-white text-2xl leading-[32px] mt-6">
              {slider.author}
            </p>
            <p className="text-[#7F7F7F] text-[20px] leading-[28px] mt-6 text-center">
              {slider.company}
            </p>
          </div>
        );
      })}
    </Slider>
  );
}

export default SimpleSlider;
