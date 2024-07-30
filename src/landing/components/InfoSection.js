import React from 'react';
import Button from './Button/Button';
import element from '../assets/images/001@1-3000x3000 6.png';
import element1 from '../assets/images/001@1-3000x3000 7.png';
import foundation from './data/foundationalData';
import rectangle from '../assets/images/Rectangle 11.png';

function InfoSection() {
  return (
    <>
      <div className="relative h-auto pb-40">
        <div className="flex flex-col items-center">
          <p className="mb-8 mt-28 text-white z-50 text-3xl md:text-5xl text-center w-full leading-[56px] font-semibold">
            We are a foundational model company, where <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #4DC9E6 0%, #210CAE 100%)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}>
              {' '}
              language meets vision
            </span>{' '}
            to build the future.
          </p>
          <Button title="Join waitlist" url="#" arrow="true" />
        </div>

        <div className="w-full flex justify-between">
          <img src={element} className="absolute top-5 -left-24" />
          <img
            src={element1}
            className="hidden xl:flex absolute bottom-20 -right-20"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between mt-60">
          <div className="flex flex-col z-50 w-full lg:w-1/2">
            {foundation.map((found) => {
              return (
                <div className="flex flex-col group mt-6 cursor-pointer">
                  <p className="group-hover:text-white text-[#7F7F7F] cursor-pointer font-semibold text-2xl">
                    {found.title}
                  </p>
                  <p className="border-b-2 pb-5 group-hover:border-white border-[#7F7F7F] group-hover:text-white text-[#7F7F7F] cursor-pointer w-full mt-4">
                    {found.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="w-full lg:w-[45%]">
            <img className="w-full" src={rectangle} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoSection;
