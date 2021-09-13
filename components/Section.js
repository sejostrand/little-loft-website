import React from 'react';
import styles from '../styles/Section.module.scss';
import MobilePhone from './MobilePhone';

const Section = ({ content }) => {
  return (
    <section className={styles.section}>
      <div name='section-content' className={styles.section_content__div}>
        <h1 className={styles.section__h1}>{content.heading}</h1>
        <h2 className={styles.section__h2}>{content.subHeading}</h2>
        <p className={styles.section__p}>{content.paragraph}</p>
      </div>
      <MobilePhone screenContentUrl={content.screenContentUrl} />
    </section>
  );
};

export default Section;
