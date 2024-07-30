import React from 'react';
import robot from '../assets/images/xu-haiwei-fv1EFjgIb94-unsplash 3.png';
import logo from '../assets/images/Frame 2085651516.svg';
import icon from '../assets/images/tabler-icon-world.svg';
import { Link } from 'react-router-dom';
import Button from './Button/Button';
import partners from './data/partnersData';
function Header() {
  return (
    <div className="text-white h-screen relative">
      <img
        className="absolute bottom-0 object-cover h-full"
        src={robot}
        alt=""
      />
      <div className="flex items-center justify-between z-50 relative py-7">
        <div className="flex items-center justify-between w-full md:w-32">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <button className="ml-5">
            <img src={icon} alt="" />
          </button>
        </div>

        <div className="flex items-center hidden md:flex">
          <Link to="/" className="text-base">
            Get in touch
          </Link>
          <div className="ml-5">
            <Button title="Join waitlist" url="#" arrow="false" />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="mb-8 text-white flex flex-col z-50 text-3xl leading-10 md:text-6xl text-center w-full lg:w-[667px] md:leading-[72px] font-bold">
          We are building{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #4DC9E6 0%, #210CAE 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}>
            artificial intelligence
          </span>{' '}
          that sees everything.
        </p>
        <Button title="Join waitlist" url="#" arrow="true" />
      </div>

      <div className="flex flex-wrap  px-2 lg:flex-row  absolute bottom-20 w-full justify-between items-center z-50">
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
    </div>
  );
}

export default Header;
