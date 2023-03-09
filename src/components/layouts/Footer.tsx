import { FC } from 'react';

import config from '@/config.json';

import styles from './layout.module.scss';
import Image from 'next/image';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.icons}>
          {config.footer.map((s) => (
            <a key={s.link} target="_blank" href={s.link} rel="noreferrer">
              <Image src={s.icon} alt="icon" width={20} height={20} />
            </a>
          ))}
        </div>
        <p className={styles.copyright}>
          © 2023 ywbird powered by Suitcase and Next.js, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
