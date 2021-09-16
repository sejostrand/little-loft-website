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
            animationTimingFunction: 'ease-in',
          });
        }
      });
    });
    sectionObserver.observe(section);
  }, []);

  return (
    <section className={styles.story__section}>
      <div id='story-content' className={styles.story_content__div}>
        <h1 className={styles.story__h1}>{content.heading}</h1>
        <h2 className={styles.story__h2}>{content.subHeading}</h2>
        <p className={styles.story__p}>{content.paragraph}</p>
      </div>
      <img className={styles.story__img} src={content.imageUrl} />
    </section>
  );
};

export default StorySection;
