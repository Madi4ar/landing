import React from 'react';
import styles from './style.module.css';
import Button from '../Button';
function ButtonModel({ title, url, arrow, buttonClass, contentClass }) {
  return (
    <>
      <Button
        title={title}
        url={url}
        arrow={arrow}
        buttonClass={styles.button}
        contentClass={styles.content}
      />
    </>
  );
}

export default ButtonModel;
