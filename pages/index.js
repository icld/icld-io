import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [display ]
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
              Hello. My name is{' '}
              <div style={{ display: 'inline-block', color: '#f0426e' }}>
                {' '}
                Ian Lyles
              </div>
              . <br />I am a web developer.
              <br />
              Welcome to <span className={styles.titleName}>icld.io</span>
            </span>
            <span className={styles.titleB}>
              <Link href='/projects'>
                <a>View some of my work</a>
              </Link>
            </span>
          </h1>

          <p className={styles.description}>
            I am a Portland-based freelance coder with a background in design
            and project management. I am excited to work with you on your next
            extraordinary project.
            <br />
            <Link href='/contact' style={{ position: 'inline-block' }}>
              <a> What would you like to build?</a>
            </Link>
          </p>
        </card>
      </main>
      {/* <Modal
        isOpen={modalIsOpen}
        className={styles.Modal}
        overlayClassName={styles.Overlay}
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick={true}
      >
        I'm a modal
      </Modal> */}
    </>
  );
}
