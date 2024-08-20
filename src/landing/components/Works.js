import React from 'react';
import Title from './Title/Title';
import Tabs from './Tabs/Tabs';
import Button from './Button/Button';
import rectangle from '../assets/images/Rectangle 11.png';
import ButtonModel from './Button/ButtonModel/ButtonModel';
function Works() {
  const images = [rectangle, rectangle, rectangle];
  return (
    <>
      <div className="mt-16 pb-40">
        <Title title="How it works" position="center" />

        <div className="flex flex-col items-start justify-between mt-16">
          <div className="w-full flex flex-col items-center">
            <p className="text-3xl lg:text-4xl font-normal leadin-[42px] text-white">
              Our possibilities
            </p>

            <p className="text-[#7F7F7F] text-xl lg:text-2xl mt-6">
              Our AI can be used in many different areas.
            </p>

            <Tabs />
            <div className="mt-6">
              <ButtonModel title="Join waitlist" arrow="true" url="#" />
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-between mt-10">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="w-[32%]"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
