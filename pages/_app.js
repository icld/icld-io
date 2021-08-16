import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';
import Image from 'next/image';
import pic from '../public/images/_DSF5585.JPG';

function MyApp({ Component, pageProps }) {
  return (
    <div
      style={{
        height: '99.5vh',
        width: '99.5vw',
        margin: '2px auto',
        position: 'relative',
      }}
    >
      <Header />

      <Image
        style={{ position: 'relative' }}
        src={pic}
        blurDataURL='/images/_DSF5585.JPG'
        alt='streets'
        quality={50}
        priority={true}
        // loading='eager'

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
