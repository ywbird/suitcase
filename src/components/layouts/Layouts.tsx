import Link from 'next/link';
import { FC, ReactNode } from 'react';

import NavLink from '../common/NavLink';
import Head from 'next/head';

import styles from './layout.module.css';

const Layout: FC<{
  children: ReactNode;
  title: string;
}> = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Suitcase</title>
      </Head>
      <header>
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/blog">Blog</NavLink>
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
