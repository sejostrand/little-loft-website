import React from 'react';
import styles from '../styles/MobilePhone.module.scss';

const MobilePhone = ({ screenContentUrl }) => {
  return (
    <div className={styles.mobilePhone_div}>
      <img className={styles.mobileContent_img} src={screenContentUrl}></img>
      <img className={styles.mobilePhone_img} src='./iphone_body.png'></img>
    </div>
  );
};

export default MobilePhone;
