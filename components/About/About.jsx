import React from 'react';
import Link from 'next/link';
import router, { useRouter } from 'next/router';
import styles from './About.module.css';

export default () => (
  <>
    <div>
      <main className={styles.aboutMain}>
        <h1>About Page</h1>
      </main>
    </div>
  </>
);
