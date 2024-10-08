import React from 'react';
import { useInView } from 'react-intersection-observer';
import element from '../assets/images/001@1-3000x3000 6.png';
import element1 from '../assets/images/001@1-3000x3000 7.png';
import ButtonModel from './Button/ButtonModel/ButtonModel';
import Typewriter from 'typewriter-effect';
import animateVideo from '../assets/images/video-for-animation.mp4';
function InfoSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <>
      <div className="relative h-auto pb-40">
        <div className="flex flex-col items-center z-[100] relative">
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
          <ButtonModel title="Join waitlist" url="#" arrow="true" />
        </div>

        <div className="w-full flex items-start justify-between z-50 absolute top-0">
          <img
            src={element}
            className="animate-pulse z-[-20] -ml-24 mt-32 scale-90"
          />
          <img
            src={element1}
            className="hidden xl:flex scale-90 -mr-24 animate-pulse"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between mt-60">
          <div className="flex flex-col items-start z-50 w-full lg:w-[45%]">
            <p className="font-medium text-[32px] text-white">
              Training a model that can see everything.
            </p>
            <p className="font-medium text-[#717681] text-xl mt-5">
              Issue your command, and our AI springs into action without delay,
              no coding needed.
            </p>

            <div
              ref={ref}
              className="w-full mt-5 lg:w-96 text-[#717681] py-4 px-2 border border-[#3849DB] rounded-xl">
              {inView && (
                <Typewriter
                  options={{
                    strings: [
                      'Detect when people smoke',
                      'Show me who fought',
                      'Some guy is working',
                    ],
                    autoStart: true,
                    loop: true,
                    typeSpeed: 35,
                    deleteSpeed: 35,
                  }}
                />
              )}
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 z-50">
            <video className="w-full rounded-lg" autoPlay muted loop>
              <source src={animateVideo} type="video/mp4" className="h-full" />
              Ваш браузер не поддерживает видео
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoSection;
