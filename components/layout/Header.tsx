'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = {
  '/': 'Home',
  '/about': 'About',
  '/blog': 'Blog',
  '/projects': 'Projects',
} as const;

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="relative py-5">
      <nav className="flex justify-between gap-8 sm:justify-start">
        {Object.entries(links).map(([link, label]) => (
          <Link
            href={link}
            key={link}
            className={
              pathname === link
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
