import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import content from '../utils/content';

//Components
import HeadSection from '../components/HeadSection';
import Section from '../components/Section';
import StorySection from '../components/StorySection';
import MailingSection from '../components/MailingSection';
import Footer from '../components/Footer';

export default function Home() {
  //section animation handler
  useEffect(() => {
    let sections = document.getElementsByName('section-content');
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.animate(
            [
              { transform: 'translateY(30%) scaleX(0.9)', opacity: 0 },
              { transform: 'translateY(0) scaleX(0.9)', opacity: 1 },
            ],
            {
              duration: 500,
              iterations: 1,
            }
          );
        }
      });
    });
    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }, []);

  return (
    <div className={styles.app}>
      <Head>
        <title>Little Loft | Find new joy in second-hand toys</title>
        <meta
          name='description'
          content="High-quality toys at a fraction of the price, and you'll be helping to save our planet Earth by reducing landfill."
        />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <img className={styles.logo__img} src='/little_loft_logo.svg'></img>
      <main className={styles.home__main}>
        <HeadSection content={content.headSection} />
        <Section content={content.section1} />
        <Section content={content.section2} />
        <Section content={content.section3} />
        <Section content={content.section4} />
        <StorySection content={content.storySection} />
        <MailingSection content={content.mailingSection} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
}
