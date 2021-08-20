import React from 'react';
import Link from 'next/link';
import router, { useRouter } from 'next/router';
import About from '../components/About/About';
import Layouter from '../components/Layouter/Layouter';
import Abt from '../components/About/About.mdx';

export default () => {
  return (
    <>
      <Layouter>
        <Abt />
      </Layouter>
    </>
  );
};
