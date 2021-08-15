import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';
import Image from 'next/image';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />

      <Image
        src='/images/_DSF5585.JPG'
        blurDataURL='/images/_DSF5585.JPG'
        alt='streets'
        quality={50}
        priority={true}
        loading='eager'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        className={styles.img}
      />

      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
