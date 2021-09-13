import React from 'react';
import styles from '../styles/Footer.module.scss';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = ({ content }) => {
  return (
    <footer className={styles.footer__section}>
      <h1 className={styles.footer__h1}>{content.heading}</h1>
      <div className={styles.store_buttons__div}>
        <button className={styles.app_store__button}></button>
        <button className={styles.play_store__button}></button>
      </div>
      <div className={styles.footer_container__div}>
        <span className={styles.footer_legal__span}>{content.legal}</span>
        <div className={styles.footer_links__div}>
          <a className={styles.footer_link__a}>
            <FaFacebookF />
          </a>
          <a className={styles.footer_link__a}>
            <FaTwitter />
          </a>
          <a className={styles.footer_link__a}>
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
