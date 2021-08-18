import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';
import Image from 'next/image';
import pic from '../public/images/_DSF5585.JPG';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          background: 'black',
          height: '99%',
          width: '99%',
          left: '.5%',
          right: 'auto',
          top: '.5%',
          bottom: 'auto',
          marginRight: '-50%',
          zIndex: -2,
          borderRadius: '10px',
        }}
      />

      <div
        style={{
          height: '99%',
          width: '99%',
          left: '.5%',
          right: 'auto',
          top: '.5%',
          bottom: 'auto',
          position: 'absolute',
        }}
      >
        <Header />

        <Image
          src={pic}
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
    </div>
  );
}
export default MyApp;
