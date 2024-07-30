import React from 'react';
import Title from './Title/Title';
import rectangle from '../assets/images/Rectangle 12.png';
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
              While we've made incredible progress developing AI systems that
              can understand multimodal information, getting response time down
              to something conversational is a difficult engineering challenge.
            </p>

            <p className="text-[#7F7F7F] text-base leading-6 mt-6">
              Over the past few years, we've been working to improve how our
              models perceive, reason and converse to make the pace and quality
              of interaction feel more natural.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-between">
            <div className="flex flex-col w-full">
              <img src={rectangle} alt="" />
              <p className="text-[#7F7F7F] text-base mt-5">
                Combining the video and speech input into a timeline of events.
              </p>
            </div>

            <div className="flex flex-col w-full ml-10  ">
              <div className="flex flex-col">
                <img src={rectangle} alt="" />
                <p className="text-[#7F7F7F] text-base mt-5">
                  Continuously encoding video frames.
                </p>
              </div>

              <div className="flex flex-col mt-6">
                <img src={rectangle} alt="" />
                <p className="text-[#7F7F7F] text-base mt-5">
                  Caching information for efficient recall.
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
