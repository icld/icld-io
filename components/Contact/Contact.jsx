import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import router, { useRouter } from 'next/router';
// import styles from './About.module.css';
import styles from '../../styles/Home.module.css';
import contactStyles from './Contact.module.css';
import MyForm from './Form/Form';
import Socials from '../social/Socials';

const Contact = () => (
  <>
    <main className={styles.container}>
      <div className={contactStyles.contactCard}>
        <h1 className={contactStyles.contactTitle}>Say Hello:</h1>
        <MyForm />
        <Socials />
      </div>
    </main>
  </>
);

export default Contact;
