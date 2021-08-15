import { useState } from 'react';
import Link from 'next/link';
import router, { useRouter } from 'next/router';

import styles from './Header.module.css';

const navItems = [
  { name: 'projects', toHref: '/projects' },
  { name: 'about', toHref: '/about' },
  { name: 'blog', toHref: '/blog' },
  { name: 'contact', toHref: '/contact' },
];

const Header = (props) => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(true);

  const closeHandle = (e) => {
    activeMenu ? setActiveMenu(false) : setActiveMenu(true);
  };

  return (
    <>
      <header
        className={` ${styles.header} ${activeMenu ? styles.activeMenu : ''} `}
      >
        <nav className={styles.nav}>
          <div
            style={{
              display: 'flex',
              paddingTop: '10px',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Link href='/'>
              <a
                className={`${styles.link} ${styles.icld}
              ${router.pathname === '/' ? styles.active : styles.icld}`}
              >
                ICLD
              </a>
            </Link>

            <span className={styles.closeBtn} onClick={() => closeHandle()}>
              <span
                className={`${styles.line1} ${activeMenu ? styles.active : ''}`}
              ></span>
              <span
                className={`${styles.line2} ${activeMenu ? styles.active : ''}`}
              ></span>
              <span
                className={`${styles.line3} ${activeMenu ? styles.active : ''}`}
              ></span>
            </span>
          </div>
        </nav>
        <ul
          className={`${styles.menuList}  ${
            activeMenu ? styles.activeMenuList : ''
          }`}
        >
          {navItems.map((item, i) => (
            <li>
              <Link href={item.toHref}>
                <a
                  className={`${styles.link}
              ${router.pathname === item.toHref ? styles.active : styles.link}`}
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Header;
