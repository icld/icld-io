import React from 'react';
import Link from 'next/link';
import router, { useRouter } from 'next/router';
// import styles from './About.module.css';
import styles from '../../styles/Home.module.css';
import aboutStyles from './About.module.css';

export default () => (
  <>
    <main className={styles.container}>
      <div className={aboutStyles.aboutMain}>
        <div className={aboutStyles.aboutInner}>
          <h1>About Page</h1>
        </div>
      </div>
    </main>
  </>
);
