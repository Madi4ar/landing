import React from 'react';

function Title({ title, position }) {
  return (
    <div
      className={`font-semibold text-5xl text-white w-full z-50 ${
        position === 'center' ? 'text-center' : 'text-left'
      }`}>
      {title}
    </div>
  );
}

export default Title;
