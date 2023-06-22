'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';

interface Props {
  link: string;
  label: string;
}

export default function NavLink({ link, label }: Props) {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();

  const active = link === pathname || link.startsWith(`/${segment}`);

  return (
    <Link
      href={link}
      className={classNames(
        'nav-link transition-all duration-500',
        active ? 'active' : 'opacity-60 hover:opacity-100'
      )}
    >
      {label}
    </Link>
  );
}
