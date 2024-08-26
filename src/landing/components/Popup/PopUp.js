import React from 'react';
import ReactDOM from 'react-dom';
import bgForm from '../../assets/images/bg-form-2.png';
import WaitlistForm from '../WaitlistForm';
import bgform from '../../assets/images/form-bg.png';
import close from '../../assets/images/close.svg';
function PopUp({ onClose }) {
  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="rounded-lg lg:rounded-[40px] w-4/5 bg-black flex flex-wrap text-white">
        <div className="flex items-center justify-center w-full h-auto py-10 px-5 lg:w-1/2 lg:h-[600px] relative ">
          <div className="flex flex-col items-start justify-center w-full lg:w-[500px]">
            <img
              className="rounded-lg lg:rounded-[40px] w-full h-full object-cover absolute top-0 left-0"
              src={bgForm}
              alt=""
            />
            <p className="uppercase font-bold text-5xl">GET IN TOUCH</p>
            <p className="mt-5 w-full">
              Join the waitlist today for exclusive early access to our AI —
              where commands meet instant execution!
            </p>

            <div className="flex flex-wrap justify-between z-50 w-full mt-5">
              <WaitlistForm />
            </div>

            <button
              onClick={onClose}
              className="mt-4 p-2 text-white z-50 absolute right-3 top-0">
              <img className="" src={close} alt="" />
            </button>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-1/2 rounded-lg relative">
          <img
            className="w-full rounded-[40px] absolute right-5"
            src={bgform}
            alt=""
          />
        </div>
      </div>
    </div>,
    document.body
  );
}

export default PopUp;
