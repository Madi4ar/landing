import React from 'react';
import Title from './Title/Title';
import rectangle from '../assets/images/Rectangle 12.png';
import photo from '../assets/images/person-using-futuristic-technology.jpg';
import photo1 from '../assets/images/software-development-programming-computer-screen-modish-application.jpg';
import photo2 from '../assets/images/business-woman.jpg';

function Hood() {
  return (
    <>
      <div className="py-16">
        <Title title="Under the hood" position="center" />
        <p className="text-[#7F7F7F] text-base leading-7 lg:text-2xl font-normal lg:leading-[32px] text-center mt-6">
          To be truly useful, an agent needs to understand and respond to the
          complex and dynamic world just like people do — and take in and
          remember what it sees and hears to understand context and take action.
          It also needs to be proactive, teachable and personal, so users can
          talk to it naturally and without lag or delay.
        </p>

        <div className="flex flex-col lg:flex-row items-center mt-6 justify-between">
          <div className="w-full lg:w-[40%] flex flex-col">
            <p className="text-[#7F7F7F] text-base leading-6">
              Our goal is to create technology that perceives the world like
              human eyes.
            </p>

            <p className="text-[#7F7F7F] text-base leading-6 mt-6">
              We aim for our system to not only respond but to understand and
              adapt to visual information with the same depth and accuracy as a
              human. Our dream is to develop a model that feels as intuitive and
              natural as possible, becoming an indispensable assistant in
              everyday life.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-between mt-5 lg:mt-0">
            <div className="flex flex-col w-full mb-10 lg:mb-0">
              <img className="rounded-lg" src={photo} alt="" />
              <p className="text-[#7F7F7F] text-base mt-5">
                Augmenting the end-to-end solution with a complex system of
                algorithms
              </p>
            </div>

            <div className="flex flex-col w-full ml-0 lg:ml-10 ">
              <div className="flex flex-col mb-10 lg:mb-0">
                <img className="rounded-lg" src={photo1} alt="" />
                <p className="text-[#7F7F7F] text-base mt-5">
                  Continuously encoding video frames and presenting real-time
                  output
                </p>
              </div>

              <div className="flex flex-col mt-6">
                <img className="rounded-lg" src={photo2} alt="" />
                <p className="text-[#7F7F7F] text-base mt-5">
                  Improving model for better zero-shot results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hood;
