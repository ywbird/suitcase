import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { useTheme } from 'next-themes';

import NavLink from '../common/NavLink';

import styles from './layout.module.scss';

const Layout: FC<{
  children: ReactNode;
  title: string;
}> = ({ children, title }) => {
  const { theme, setTheme } = useTheme();
  let nextTheme = theme === 'black' ? 'white' : 'black';

  function toggleTheme() {
    setTheme(nextTheme);
    nextTheme = theme === 'black' ? 'white' : 'black';
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{`${title} - Suitcase`}</title>
      </Head>
      <header>
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <NavLink href="/">[Home]</NavLink>
            </li>
            <li>
              <NavLink href="/about">[About]</NavLink>
            </li>
            <li>
              <NavLink href="/blog">[Blog]</NavLink>
            </li>
            <li>
              <button
                role="button"
                className={styles.themeToggle}
                onClick={toggleTheme}
              >
                [{theme}]
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
