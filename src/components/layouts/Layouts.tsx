import { FC, ReactNode } from 'react';
import Head from 'next/head';

import styles from './layout.module.scss';
import Header from './Header';

const Layout: FC<{
  children: ReactNode;
  title: string;
}> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{`${title} - Suitcase`}</title>
      </Head>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.heading}>{title}</h1>
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
