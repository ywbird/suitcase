import { FC, ReactNode } from 'react';
import Head from 'next/head';

import styles from './layout.module.scss';
import Header from './Header';
import Footer from './Footer';

const Layout: FC<{
  children: ReactNode;
  title: string;
  date?: string;
}> = ({ children, title, date }) => {
  return (
    <div>
      <Head>
        <title>{`${title} - Suitcase`}</title>
      </Head>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.heading}>{title}</h1>
        <div className={styles.meta}>
          <hr className={styles.bar} />
          {date ? (
            <>
              <div className={styles.date}>{date}</div>
              <hr className={styles.bar} />
            </>
          ) : null}
        </div>
        <div>{children}</div>
        <hr className={styles.bar} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
