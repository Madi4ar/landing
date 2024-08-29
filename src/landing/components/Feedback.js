import React, { useState } from 'react';
import Title from './Title/Title';
import SimpleSlider from './Slider';
import faqsData from './data/faqsData';
import geometric from '../assets/images/001@1-3000x3000 6.png';
import geometric1 from '../assets/images/001@1-3000x3000 7.png';

function Feedback() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="py-16 relative h-full lg:overflow-hidden">
        <img
          className="hidden xl:flex absolute bottom-0 -right-96 h-[772px] animate-pulse"
          src={geometric}
          alt=""
          style={{ clipPath: 'inset(0 0 0 0)' }}
        />

        <img
          className="hidden xl:flex absolute -top-20 -left-96 h-[772px] animate-pulse"
          src={geometric1}
          alt=""
        />
        <div className="z-50">
          <Title
            title="We have changed the game of AI data—hear it from our customers."
            position="center"
          />
        </div>

        <div className="mt-20">
          <SimpleSlider />
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between mt-40 relative min-h-96">
          <div className="w-full lg:w-[30%] absolute left-0 -top-14 md:top-0">
            <Title title="FAQ" position="left" />
          </div>

          <div className="flex flex-col mt-5 lg:mt-0 w-full lg:w-[40%] absolute right-0">
            {faqsData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="flex flex-col mb-10 w-full">
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => toggleOpen(index)}>
                    <svg
                      className={`transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      ы
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 11L12 14L9 11M12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C14.3869 21 16.6761 20.0518 18.364 18.364C20.0518 16.6761 21 14.3869 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-white ml-2 text-lg font-semibold">
                      {faq.question}
                    </p>
                  </div>
                  {openIndex === index && (
                    <div className="mt-3 text-white">{faq.answer}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
