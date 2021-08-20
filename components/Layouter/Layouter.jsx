import React from 'react';
import Link from 'next/link';
import router, { useRouter } from 'next/router';
// import styles from './About.module.css';
import styles from '../../styles/Home.module.css';
import layoutStyles from './Layouter.module.css';

export default ({ children }) => (
  <>
    <main className={styles.container}>
      <div className={layoutStyles.layoutMain}>
        <div className={layoutStyles.layoutInner}>{children}</div>
      </div>
    </main>
  </>
);
