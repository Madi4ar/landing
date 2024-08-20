import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';
import arrowImage from '../../../assets/images/Left.svg';
function ButtonModel({ title, url, arrow }) {
  return (
    <Link to={url} className={styles.button}>
      <div className={styles.content}>
        {title}
        {arrow === 'true' && <img src={arrowImage} alt="" />}
      </div>
    </Link>
  );
}

export default ButtonModel;
