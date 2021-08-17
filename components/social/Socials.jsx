import Instagram from './Instagram';
import Twitter from './Twitter';
import GitHub from './GitHub';
import Email from './Email';
import LinkedIn from './LinkedIn';

import socialStyles from './Social.module.css';

export default function () {
  return (
    <div className={socialStyles.mainSocials}>
      <GitHub />
      <Instagram />
      <Twitter />
      <LinkedIn />
      <Email />
    </div>
  );
}
