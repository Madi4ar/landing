import React from 'react';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
      <div className="flex flex-wrap justify-between lg:justify-start items-start">
        <div className="flex flex-col">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>

          <div className="flex mt-20">
            <Link to="/instagram">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.5 7.5V7.51M4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4H16C17.0609 4 18.0783 4.42143 18.8284 5.17157C19.5786 5.92172 20 6.93913 20 8V16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20H8C6.93913 20 5.92172 19.5786 5.17157 18.8284C4.42143 18.0783 4 17.0609 4 16V8ZM9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z"
                  stroke="#7F7F7F"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>

            <Link to="/linkedin" className="ml-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 11V16M8 8V8.01M12 16V11M16 16V13C16 12.4696 15.7893 11.9609 15.4142 11.5858C15.0391 11.2107 14.5304 11 14 11C13.4696 11 12.9609 11.2107 12.5858 11.5858C12.2107 11.9609 12 12.4696 12 13M4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6Z"
                  stroke="#7F7F7F"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>

            <Link to="/facebook" className="ml-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 10V14H10V21H14V14H17L18 10H14V8C14 7.73478 14.1054 7.48043 14.2929 7.29289C14.4804 7.10536 14.7348 7 15 7H18V3H15C13.6739 3 12.4021 3.52678 11.4645 4.46447C10.5268 5.40215 10 6.67392 10 8V10H7Z"
                  stroke="#7F7F7F"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-1/2 lg:w-auto ml-0 lg:ml-56">
          <p className="text-[#7F7F7F] text-base">Company</p>
          <Link to="/">
            <p className="text-white text-[18px] leading-6">Who are we?</p>
          </Link>
          <Link to="/" className="mt-1">
            <p className="text-white text-[18px] leading-6">Why us?</p>
          </Link>
          <Link to="/" className="mt-1">
            <p className="text-white text-[18px] leading-6">Reviews</p>
          </Link>
        </div>

        <div className="flex flex-col ml-0 mt-5 md:mt-0 lg:ml-10">
          <p className="text-[#7F7F7F] text-base">Contacts</p>
          <Link to="mailto:anurtazayev@bizdin.ai">
            <p className="text-white text-[18px] leading-6">
              anurtazayev@bizdin.ai
            </p>
          </Link>
          <Link to="tel:+7 705 775 6571" className="mt-1">
            <p className="text-white text-[18px] leading-6">+7 705 775 6571</p>
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-between mt-20 pb-6">
        <div className="flex items-center w-full justify-between lg:w-[350px]">
          <Link to="/">
            <p className="text-[#7F7F7F]">Privacy policy</p>
          </Link>
          <svg
            className="hidden lg:block ml-6"
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 0.196C2.812 0.196 3.484 0.868 3.484 1.68C3.484 2.506 2.812 3.178 2 3.178C1.174 3.178 0.502 2.506 0.502 1.68C0.502 0.868 1.174 0.196 2 0.196Z"
              fill="#666D80"
            />
          </svg>

          <Link to="/" className="ml-0 lg:ml-6">
            <p className="text-[#7F7F7F]">Terms of use</p>
          </Link>
        </div>

        <p className="text-[#7F7F7F] w-auto mt-6 lg:mt-0 font-['Graphik_LCG']">
          bizdin ai © 2024 All rights reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
