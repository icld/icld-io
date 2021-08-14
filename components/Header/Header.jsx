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
  // useEffect(() => {
  //   const
  //     return () => {
  //         cleanup
  //     }
  // }, [input])

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href='/'>
          {router.pathname === '/' ? (
            <a className={(styles.link, styles.icld)}>ICLD</a>
          ) : (
            <a sx={{ variant: 'links.icldNav' }}>ICLD</a>
          )}
        </Link>
        <div sx={{ display: 'flex' }}>
          {navItems.map((item, i) => (
            // eslint-disable-next-line react/jsx-key
            <Link href={item.toHref}>
              {router.pathname === item.toHref ? (
                <a className={(styles.activeLink, styles.link)}>{item.name} </a>
              ) : (
                <a className={(styles.activeLink, styles.link)}>{item.name} </a>
              )}
            </Link>
          ))}
          {/* <Button
            onClick={(e) => {
              setColorMode(colorMode === 'light' ? 'dark' : 'light');
            }}
          >
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
