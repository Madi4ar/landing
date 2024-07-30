import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';
import arrowImage from '../../assets/images/Left.svg';
function Button({ title, url, arrow }) {
  return (
    <Link to={url} className={styles.button}>
      {title}
      {arrow === 'true' && <img src={arrowImage} alt="" />}
    </Link>
  );
}

export default Button;
