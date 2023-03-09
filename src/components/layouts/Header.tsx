import Image from 'next/image';

import config from '@/config.json';

import NavLink from '../common/NavLink';
import useDarkMode from '@/libs/useDarkMode';

import styles from './layout.module.scss';

const Header = () => {
  const { isThemeDark, toggleTheme } = useDarkMode();
  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <ul className={styles.navLinks}>
          <li>
            <NavLink href="/">
              <Image
                className={styles.logo}
                src="/icon.png"
                alt="logo"
                width={28}
                height={28}
              />
            </NavLink>
          </li>
          {config.menu.map((item) => (
            <li key={item.path}>
              <NavLink href={item.path}>[{item.name}]</NavLink>
            </li>
          ))}
          <li>
            <button
              role="button"
              className={styles.themeToggle}
              onClick={toggleTheme}
            >
              [{isThemeDark ? 'Black' : 'White'}]
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
