import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

// import Header from '../src/Components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ICLD.io</title>
        <meta name='description' content='icld' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Image
          src='/images/_DSF5585.JPG'
          blurDataURL='/images/_DSF5585.JPG'
          alt='streets'
          quality={50}
          // priority={true}
          loading='eager'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          className={styles.img}
        />
        <h1>Welcome to icld.io</h1>

        <p>Hello! I am a Portland, Oregon based freelancer.</p>

        <div></div>
      </main>
    </div>
  );
}
