import { useState, useEffect } from 'react';
import Link from 'next/link';
import router, { useRouter } from 'next/router';

import styles from './Header.module.css';

const Header = (props) => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(false);
  const [chngCol, setChngCol] = useState(false);

  const closeHandle = (e) => {
    activeMenu ? setActiveMenu(false) : setActiveMenu(true);
  };

  //remove dropdown menu when window is larger size
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        setActiveMenu(false);
      }
    });
  });

  const changeColor = () => {
    setChngCol(!chngCol);
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
                className={` ${styles.icld}
              ${router.pathname === '/' ? styles.activeIcld : styles.icld}`}
              >
                ICLD
                {/* {spanItems.map((item, i) => {
                  const name = item.cName;
                  const altC = item.altCName;
                  return (
                    <span
                      key={i}
                      className={chngCol ? altC : name}
                      onMouseEnter={() => changeColor()}
                    >
                      {item.letter}
                    </span>
                  );
                })} */}
              </a>
            </Link>
            {/* upper Nav */}
            <div className={styles.barNav}>
              {navItems.map((item, i) =>
                item.name === 'lx' ? (
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href={item.toHref}
                    className={`${styles.barLink}
              ${
                router.pathname === item.toHref
                  ? styles.activeBarLink
                  : styles.barLink
              }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link href={item.toHref}>
                    <a
                      className={`${styles.barLink}
              ${
                router.pathname === item.toHref
                  ? styles.activeBarLink
                  : styles.barLink
              }`}
                    >
                      {item.name}
                    </a>
                  </Link>
                )
              )}
            </div>
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
            <li key={i}>
              <Link href={item.toHref}>
                <a
                  className={`${styles.link}
              ${router.pathname === item.toHref ? styles.active : styles.link}`}
                  onClick={() => setActiveMenu(!activeMenu)}
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

const navItems = [
  { name: 'projects', toHref: '/projects' },
  { name: 'about', toHref: '/about' },
  { name: 'lx', toHref: 'https://www.icldesign.com' },
  { name: 'contact', toHref: '/contact' },
  { name: 'blog', toHref: '/blog' },
];

const spanItems = [
  { cName: styles.spanI, altCName: styles.spanIChng, letter: 'I' },
  { cName: styles.spanC, altCName: styles.spanCChng, letter: 'C' },
  { cName: styles.spanL, altCName: styles.spanLChng, letter: 'L' },
  { cName: styles.spanD, altCName: styles.spanDChng, letter: 'D' },
];
