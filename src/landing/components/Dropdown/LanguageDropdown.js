import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import icon from '../../assets/images/tabler-icon-world.svg';

function LanguageDropdown() {
  const [language, setLanguage] = useState('ru');
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'ru', name: 'Рус' },
    { code: 'en', name: 'Eng' },
    { code: 'kz', name: 'Қаз' },
  ];

  const handleLanguageChange = (code) => {
    setLanguage(code);
    setOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col relative" ref={dropdownRef}>
      <button className="flex items-center ml-5" onClick={() => setOpen(!open)}>
        <img src={icon} alt="" className="mr-3" />
        {languages.find((lang) => lang.code === language).code}
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`ml-3 ${
            open
              ? 'rotate-180 transition-all duration-300'
              : 'rotate-0 transition-all duration-300'
          }`}
        />
      </button>
      {open && (
        <ul className="bg-white rounded-lg absolute top-8 right-0 md:-right-5">
          {languages.map((lang) => (
            <li
              className="hover:bg-gray-100 hover:rounded-lg text-black px-2 py-1 cursor-pointer"
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}>
              {lang.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageDropdown;
