import Link from 'next/link';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { $ } from '@/libs/core';
import HoverLink from './HoverLink';

import styles from './common.module.scss';

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => {
  const router = useRouter();
  const isActive = router.asPath.startsWith(href ?? '/');

  return (
    <HoverLink
      href={href}
      className={$(
        isActive ? styles.activeLink : undefined,
        styles.navLinkItem
      )}
    >
      {children}
    </HoverLink>
  );
};

export default NavLink;
