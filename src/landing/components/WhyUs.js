import React from 'react';
import Title from './Title/Title';
import differentData from './data/differentData';
import Button from './Button/Button';
import ButtonModel from './Button/ButtonModel/ButtonModel';

function WhyUs() {
  return (
    <>
      <Title title="Why us?" position="left" />
      <p className="text-[#7F7F7F] text-xl lg:text-2xl mt-6">
        What makes us different.
      </p>

      <div className="flex flex-wrap justify-between mt-7">
        {differentData.map((block, index) => {
          return (
            <div
              key={index}
              className="flex flex-col w-full md:w-[45%] lg:w-[30%] mb-10">
              <img className="w-[100px]" src={block.img} alt="" />
              <p className="mt-4 text-[#7F7F7F] text-xl lg:text-2xl leading-[32px]">
                {block.title}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center pb-16">
        <p className="mb-8 mt-28 text-white z-50 text-3xl leading-10 lg:text-5xl text-center w-full lg:leading-[56px] font-semibold">
          Join the waitlist
          <span
            style={{
              background: 'linear-gradient(90deg, #4DC9E6 0%, #210CAE 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}>
            {' '}
            today
          </span>{' '}
          for exclusive early access <br />
          to our AI — where commands meet
          <span
            style={{
              background: 'linear-gradient(90deg, #4DC9E6 0%, #210CAE 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}>
            {' '}
            instant execution!
          </span>{' '}
        </p>
        <ButtonModel title="Join waitlist" url="#" arrow="true" />
      </div>
    </>
  );
}

export default WhyUs;
