import React from 'react';
import Title from './Title/Title';
import Tabs from './Tabs/Tabs';
import Button from './Button/Button';
import rectangle from '../assets/images/Rectangle 11.png';
function Works() {
  return (
    <>
      <div className="mt-16 pb-40">
        <Title title="How it works" position="center" />

        <div className="flex flex-col lg:flex-row items-center justify-between mt-16">
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <p className="text-3xl lg:text-4xl font-normal leadin-[42px] text-white">
              Our possibilities
            </p>

            <p className="text-[#7F7F7F] text-xl lg:text-2xl mt-6">
              Our AI can be used in many different areas.
            </p>

            <Tabs />
            <div className="mt-6">
              <Button title="Join waitlist" arrow="true" url="#" />
            </div>
          </div>

          <div className="w-full lg:w-[48%] mt-10 lg:mt-0">
            <img className="w-full" src={rectangle} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
