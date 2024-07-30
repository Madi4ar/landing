import React from 'react';

const TabContent = ({ content }) => {
  return (
    <div className="mt-6 w-full lg:w-[500px]">
      <p className="text-white w-full text-base lg:text-2xl">{content}</p>
    </div>
  );
};

export default TabContent;
