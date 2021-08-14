import Link from 'next/link';
import router, { useRouter } from 'next/router';

import styles from './Header.module.css'

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
    <header >
      <nav>
        <Link href='/'>
          {router.pathname === '/' ? (
            <a className={}>ICLD</a>
          ) : (
            <a sx={{ variant: 'links.icldNav' }}>ICLD</a>
          )}
        </Link>
        <div sx={{ display: 'flex' }}>
          {navItems.map((item, i) => (
            <Link href={item.toHref}>
              {router.pathname === item.toHref ? (
                <a sx={{ variant: 'links.activeNav' }}>{item.name} </a>
              ) : (
                <a sx={{ variant: 'links.nav' }}>{item.name} </a>
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
