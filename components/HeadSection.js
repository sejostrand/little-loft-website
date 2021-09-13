import React from 'react';
import styles from '../styles/HeadSection.module.scss';

const HeadSection = ({ content }) => {
  return (
    <section className={styles.head__section}>
      <div className={styles.head_content__div}>
        <h1 className={styles.head__h1}>{content.heading}</h1>
        <p className={styles.head__p}>{content.paragraph}</p>
        <div className={styles.store_buttons__div}>
          <button className={styles.app_store__button}></button>
          <button className={styles.play_store__button}></button>
        </div>
      </div>
      <img className={styles.head_hero__img} src={content.heroUrl}></img>
      <span className={styles.head_background__div}></span>
    </section>
  );
};

export default HeadSection;
