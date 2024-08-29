import React from 'react';
import partners from './data/partnersData';
import Title from './Title/Title';

function Partners() {
  return (
    <>
      <Title title="Our partners" position="center" />
      <div className="flex flex-wrap px-2 lg:flex-row w-full justify-between items-center z-50 mb-20 mt-16">
        {partners.map((partner, index) => {
          return (
            <img
              src={partner.src}
              key={index}
              alt={partner.alt}
              className="!w-full z-50 lg:!w-64 mr-3 mb-5 lg:mb-0"
            />
          );
        })}
      </div>
    </>
  );
}

export default Partners;
