import React from 'react';

const TabContent = ({ content }) => {
  return (
    <div className="mt-6 w-full">
      <p className="text-white w-full text-base lg:text-2xl">{content}</p>
    </div>
  );
};

export default TabContent;
