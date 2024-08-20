import React from 'react';
import partners from './data/partnersData';
import Title from './Title/Title';

function Partners() {
  return (
    <>
      <Title title="Our partners" position="left" />
      <div className="flex flex-wrap px-2 lg:flex-row w-full justify-between items-center z-50 mb-20 mt-16">
        {partners.map((partner, index) => {
          return (
            <img
              src={partner.src}
              key={index}
              alt={partner.alt}
              className="z-50 w-32 mr-3 lg:w-auto mb-5 lg:mb-0"
            />
          );
        })}
      </div>
    </>
  );
}

export default Partners;
