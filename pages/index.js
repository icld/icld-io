import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>ICLD.io</title>
        <meta name='description' content='icld' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.container}>
        <card className={styles.mainCard} onClick={() => setModalIsOpen(true)}>
          <h1>Welcome to icld.io</h1>

          <p>
            Hi! I am a Portland, Oregon based freelance programmer with a
            background in design and project management.
          </p>
        </card>
      </main>
      <Modal
        isOpen={modalIsOpen}
        className={styles.Modal}
        overlayClassName={styles.Overlay}
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick={true}
      >
        I'm a modal
      </Modal>
    </>
  );
}
