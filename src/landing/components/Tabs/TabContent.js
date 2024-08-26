import React from 'react';

const TabContent = ({ content, images }) => {
  return (
    <div className="mt-6 w-full">
      <p className="text-white w-full text-base lg:text-2xl">{content}</p>
      <div className="flex flex-col lg:flex-row flex-wrap justify-between w-full">
        {images.map((img, index) => {
          return (
            <img
              className="w-full lg:w-[32%] mt-10 rounded-lg h-64 object-cover"
              src={img}
              alt={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TabContent;
