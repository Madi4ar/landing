import React from 'react';
import styles from './style.module.css';
import Button from '../Button';
function RegularButton({ title, url, arrow, buttonClass }) {
  return (
    <>
      <Button
        title={title}
        url={url}
        arrow={arrow}
        buttonClass={styles.button}
      />
    </>
  );
}

export default RegularButton;
