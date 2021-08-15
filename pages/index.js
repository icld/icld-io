import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>ICLD.io</title>
        <meta name='description' content='icld' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.container}>
        <h1>Welcome to icld.io</h1>

        <p>Hello! I am a Portland, Oregon based freelancer.</p>

        <div></div>
      </main>
    </>
  );
}
