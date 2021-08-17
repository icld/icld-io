import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import router, { useRouter } from 'next/router';
// import styles from './About.module.css';
import styles from '../../styles/Home.module.css';
import { Instagram } from '@icons-pack/react-simple-icons';

export default () => (
  <>
    <main className={styles.container}>
      <h1>Contact</h1>
      <a
        style={{ zIndex: '999' }}
        target='_blank'
        rel='noreferrer'
        href='https://www.instagram.com/ll_ic_ll/?hl=en'
      >
        <Instagram />
      </a>
    </main>
  </>
);
