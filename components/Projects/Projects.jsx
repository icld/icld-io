import React from 'react';
import Link from 'next/link';
import router, { useRouter } from 'next/router';
import Layouter from '../Layouter/Layouter';
// import styles from './About.module.css';
import styles from '../../styles/Home.module.css';
import styless from './Projects.module.css';

const projects = [
  {
    name: 'Outlaw Lighting',
    image: '../../public/images/outlaw.png',
    url: 'https://www.outlawlighting.com/',
  },
];

export default () => (
  <>
    <Layouter>
      <h1>Projects Page</h1>
    </Layouter>
  </>
);
