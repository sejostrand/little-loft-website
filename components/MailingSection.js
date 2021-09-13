import React, { useState, useEffect } from 'react';
import styles from '../styles/MailingSection.module.scss';

const MailingSection = ({ content }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationTrigger = document.getElementById('form');

    const woodBlocksObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });
    woodBlocksObserver.observe(animationTrigger);
  }, []);

  return (
    <section className={styles.mailing__section}>
      <div className={styles.svg_container__div}>
        {isVisible && (
          <object
            className={styles.animated__svg}
            type='image/svg+xml'
            data='/wood_blocks_animated.svg'
          ></object>
        )}
      </div>
      <div className={styles.mailing_content__div}>
        <h1 className={styles.mailing__h1}>{content.heading}</h1>
        <p className={styles.mailing__p}>{content.paragraph}</p>
        <form id='form' className={styles.mailing__form}>
          <input
            className={styles.mailing__input}
            type='email'
            required
            placeholder='Your email...'
          ></input>
          <button className={styles.mailing__button}>Suscribe</button>
        </form>
      </div>
    </section>
  );
};

export default MailingSection;
