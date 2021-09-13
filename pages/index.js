import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import content from '../utils/content';
import animateSections from '../utils/animateSections';

//Components
import HeadSection from '../components/HeadSection';
import Section from '../components/Section';
import StorySection from '../components/StorySection';
import MailingSection from '../components/MailingSection';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    animateSections();
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
