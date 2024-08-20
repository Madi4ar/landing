import React from 'react';
import robot from '../assets/images/xu-haiwei-fv1EFjgIb94-unsplash 3.png';
import logo from '../assets/images/Frame 2085651516.svg';
import icon from '../assets/images/tabler-icon-world.svg';
import { Link } from 'react-router-dom';
import Button from './Button/Button';
import LanguageDropdown from './Dropdown/LanguageDropdown';
import ButtonModel from './Button/ButtonModel/ButtonModel';
function Header() {
  return (
    <div className="text-white h-screen relative">
      <img
        className="w-full absolute bottom-0 object-cover h-full"
        src={robot}
        alt=""
      />
      <div className="container h-full px-3.5 md:px-0 sm: py-0 md:w-full md:py-0 lg:w-full mx-auto relative">
        <div className="flex items-center justify-between z-50 relative py-7">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link to="/">
              <img className="w-36" src={logo} alt="" />
            </Link>
            <LanguageDropdown />
          </div>

          <div className="flex items-center hidden md:flex">
            <Link to="mailto:hello@bizdin.ai." className="text-base">
              Get in touch
            </Link>
            <div className="ml-5">
              <Button title="Join waitlist" url="#" arrow="false" />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="font-bold mb-8 text-white flex flex-col z-50 text-3xl leading-10 md:text-6xl text-center w-full lg:w-[667px] md:leading-[72px] font-bold">
            We are building{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #4DC9E6 0%, #210CAE 100%)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: '700',
              }}>
              artificial intelligence
            </span>{' '}
            that sees everything.
          </p>
          <ButtonModel title="Join waitlist" url="#" arrow="true" />
        </div>
      </div>
    </div>
  );
}

export default Header;
