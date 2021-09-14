import React, { useEffect } from 'react';
import styles from '../styles/StorySection.module.scss';

const StorySection = ({ content }) => {
  //animation handler
  useEffect(() => {
    let section = document.getElementById('story-content');
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 750,
            iterations: 1,
          });
        }
      });
    });
    sectionObserver.observe(section);
  }, []);

  return (
    <section className={styles.story_section}>
      <div id='story-content' className={styles.story_content_div}>
        <h1 className={styles.story_h1}>{content.heading}</h1>
        <h2 className={styles.story_h2}>{content.subHeading}</h2>
        <p className={styles.story_p}>{content.paragraph}</p>
      </div>
      <img className={styles.story_img} src={content.imageUrl} />
    </section>
  );
};

export default StorySection;
