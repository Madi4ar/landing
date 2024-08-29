import React from 'react';
import { useState, useEffect, useRef } from 'react';
import robot from '../assets/images/xu-haiwei-fv1EFjgIb94-unsplash 3.png';
import logo from '../assets/images/Frame 2085651516.svg';
import icon from '../assets/images/tabler-icon-world.svg';
import { Link } from 'react-router-dom';
import Button from './Button/Button';
import LanguageDropdown from './Dropdown/LanguageDropdown';
import ButtonModel from './Button/ButtonModel/ButtonModel';
import video from '../assets/images/bizdin-ai-intro.mp4';
import RegularButton from './Button/RegularButton/RegularButton';
function Header() {
  const videoRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = Math.max(0.8, 1 - scrollY / 1000);
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className="text-white h-screen relative bg-black"
      style={{ overflow: 'hidden' }}>
      {/* <img
        className="w-full absolute bottom-0 object-cover h-full"
        src={robot}
        alt=""
      /> */}

      <div className="w-full h-[calc(100%_-_6rem)] absolute top-24 flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-full object-cover h-auto lg:h-full transition-transform duration-100 ease-in-out"
          autoPlay
          muted
          loop
          playsInline
          style={{
            transform: `scale(${scale})`,
          }}>
          <source src={video} type="video/mp4" className="h-full" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>

      <div className="container h-full px-3.5 md:px-0 sm: py-0 md:w-full md:py-0 lg:w-full mx-auto relative">
        <div className="flex items-center justify-between z-50 relative py-7">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link to="/">
              <img className="w-36" src={logo} alt="" />
            </Link>
            <LanguageDropdown />
          </div>

          <div className="flex items-center hidden md:flex relative">
            <Link to="mailto:anurtazayev@bizdin.ai" className="text-base">
              Get in touch
            </Link>
            <div className="ml-5">
              <RegularButton title="Join waitlist" url="#" arrow="false" />
            </div>
          </div>
        </div>

        {/* <div className="flex w-full flex-col items-center justify-center z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
        </div> */}
      </div>
    </div>
  );
}

export default Header;
