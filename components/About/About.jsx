import React from 'react';
import Link from 'next/link';
import router, { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import aboutStyles from './About.module.css';
import Layouter from '../Layouter/Layouter';

export default () => (
  <>
    <Layouter>
      {/* <Test /> */}
      <h1>Ian Cameron Lyles</h1>
      <p>
        I am a programmer and designer from Portland, Oregon. I enjoy playing
        music, mountain biking in the Pacific Northwest, and re-learning
        everything with my sweet little daughter, who I call Goose. I have a
        background in concert and event lighting design and have been lucky
        enough to travel the world over. I love the challenge of helping other
        creative people realize their wildest visions.
      </p>
    </Layouter>
  </>
);
