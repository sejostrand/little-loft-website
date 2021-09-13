import React from 'react';
import styles from '../styles/MobilePhone.module.scss';

const MobilePhone = ({ screenContentUrl }) => {
  return (
    <div className={styles.mobilePhone__div}>
      <img className={styles.mobileContent__img} src={screenContentUrl}></img>
      <img className={styles.mobilePhone__img} src='./iphone_body.png'></img>
    </div>
  );
};

export default MobilePhone;
