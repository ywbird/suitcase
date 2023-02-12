import Link from 'next/link';
import { ReactNode } from 'react';

import styles from './common.module.css';
import { $ } from '@/libs/core';

const HoverLink = ({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) => {
  return (
    <Link href={href} className={$(styles.link, className)}>
      {children}
    </Link>
  );
};

export default HoverLink;
