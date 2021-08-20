import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Modal from 'react-modal';
import Socials from '../components/social/Socials';

Modal.setAppElement('#__next');

export default function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1000);
  });

  return (
    <>
      <Head>
        <title>icld.io</title>
        <meta name='description' content='icld' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.container}>
        <card
          className={styles.mainCard}
          //  onClick={() => setModalIsOpen(true)}
        >
          <h1 className={styles.title}>
            <span className={styles.titleA}>
              <div className={!animate ? styles.hello : styles.helloActive}>
                My name is
              </div>
              <div
                className={!animate ? styles.ian : styles.ianActive}
                style={{
                  // marginTop: '',
                  display: 'inline-block',
                }}
              >
                {' '}
                Ian Lyles
              </div>
              <br />{' '}
              <div
                className={!animate ? styles.webDev : styles.webDevActive}
                style={{
                  marginTop: '12px',
                }}
              >
                I am a web developer
              </div>
              <div
                className={!animate ? styles.welcome : styles.welcomeActive}
                style={{
                  marginTop: '12px',
                }}
              >
                Welcome to <span className={styles.titleName}>icld.io</span>
              </div>
            </span>
            <span className={styles.titleB}>
              <Link className={styles.goalLink} href='/projects'>
                <a>View some of my work</a>
              </Link>
            </span>
          </h1>

          <p
            className={`${styles.description} ${
              animate ? styles.activeDescription : ''
            }`}
          >
            <Link
              href='/contact'
              className={styles.goalLink}
              style={{ position: 'inline-block' }}
            >
              <a> What would you like to build?</a>
            </Link>
          </p>
        </card>
      </main>
    </>
  );
}
