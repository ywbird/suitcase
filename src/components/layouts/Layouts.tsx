import { FC, ReactNode } from 'react';
import Head from 'next/head';

import NavLink from '../common/NavLink';

import styles from './layout.module.scss';

import config from '@/config.json';
import useDarkMode from '@/libs/useDarkMode';

const Layout: FC<{
  children: ReactNode;
  title: string;
}> = ({ children, title }) => {
  const { isThemeDark, toggleTheme } = useDarkMode();

  return (
    <div className={styles.container}>
      <Head>
        <title>{`${title} - Suitcase`}</title>
      </Head>
      <header>
        <nav>
          <ul className={styles.navLinks}>
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
      <main>
        <h1 className={styles.heading}>{title}</h1>
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
