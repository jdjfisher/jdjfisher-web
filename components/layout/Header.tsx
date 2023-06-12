'use client';

import Link from 'next/link';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';

const links = {
  '/': 'Home',
  '/about': 'About',
  '/projects': 'Projects',
  '/posts': 'Posts',
} as const;

export default function Header() {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();

  return (
    <header className="relative py-5">
      <nav className="flex justify-between gap-8 sm:justify-start">
        {Object.entries(links).map(([link, label]) => (
          <Link
            href={link}
            key={link}
            className={
              link === pathname || link.startsWith(`/${segment}`)
                ? 'underline decoration-orange-500 decoration-2 underline-offset-8'
                : ' opacity-60 transition-all duration-500 hover:opacity-100 '
            }
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
