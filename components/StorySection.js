import React from 'react';
import styles from '../styles/StorySection.module.scss';

const StorySection = ({ content }) => {
  return (
    <section className={styles.story_section}>
      <div className={styles.story_content_div}>
        <h1 className={styles.story_h1}>{content.heading}</h1>
        <h2 className={styles.story_h2}>{content.subHeading}</h2>
        <p className={styles.story_p}>{content.paragraph}</p>
      </div>
      <img className={styles.story_img} src={content.imageUrl} />
    </section>
  );
};

export default StorySection;
