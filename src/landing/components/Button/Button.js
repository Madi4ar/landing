import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';
import arrowImage from '../../assets/images/Left.svg';
import PopUp from '../Popup/PopUp';
function Button({ title, url, arrow, buttonClass, contentClass }) {
  const [popup, setPopup] = useState(false);
  function handleOpen(e) {
    e.preventDefault();
    setPopup(!popup);
  }

  function handleClose(e) {
    setPopup(false);
  }
  return (
    <>
      <Link to={url} className={buttonClass} onClick={handleOpen}>
        <div className={contentClass}>
          {title}
          {arrow === 'true' && <img src={arrowImage} alt="" />}
        </div>
      </Link>
      {popup && <PopUp onClose={handleClose} />}
    </>
  );
}

export default Button;
