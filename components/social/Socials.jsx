import Instagram from './Instagram';
import Twitter from './Twitter';
import GitHub from './GitHub';
import Email from './Email';
import LinkedIn from './LinkedIn';

import styles from '../../styles/Home.module.css';
import socialStyles from './Social.module.css';

export default function () {
  return (
    <div className=''>
      <div className={socialStyles.mainSocials}>
        <GitHub />
        <Instagram />
        <Twitter />
        <LinkedIn />
        <Email />
      </div>
    </div>
  );
}
