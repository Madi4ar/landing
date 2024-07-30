import React from 'react';

const Tab = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`text-[#7F7F7F] rounded-[100px] py-2 px-4 ${
        isActive
          ? 'bg-[rgba(255,255,255,0.10)] border border-[rgba(255,255,255,0.10)] text-white'
          : 'bg-transparent'
      }`}
      onClick={onClick}>
      {label}
    </button>
  );
};

export default Tab;
