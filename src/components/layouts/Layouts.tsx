import Link from 'next/link';
import { ReactNode } from 'react';
import NavLink from '../common/NavLink';
import Head from 'next/head';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Head>
        <title>Suitcase</title>
      </Head>
      <header>
        <nav>
          <ul>
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
      <main>{children}</main>
    </div>
  );
};

export default Layout;
