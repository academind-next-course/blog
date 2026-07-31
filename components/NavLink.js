'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }) {
  const path = usePathname();

  const classes = path.startsWith(href) ? 'active' : undefined;
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
