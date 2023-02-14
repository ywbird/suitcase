import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { useTheme } from 'next-themes';

import NavLink from '../common/NavLink';

import styles from './layout.module.scss';

import config from '@/config.json';

const Layout: FC<{
  children: ReactNode;
  title: string;
}> = ({ children, title }) => {
  const { theme, setTheme } = useTheme();
  const nextTheme = theme === 'black' ? 'white' : 'black';

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
                onClick={() => setTheme(nextTheme)}
              >
                [{nextTheme === 'black' ? 'White' : 'Black'}]
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
