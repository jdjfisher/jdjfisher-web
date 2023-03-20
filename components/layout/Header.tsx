import Link from 'next/link';
import { useRouter } from 'next/router';

const links = {
  '/': 'Home',
  '/about': 'About',
  '/blog': 'Blog',
  '/projects': 'Projects',
} as const;

export default function Header() {
  const router = useRouter();

  return (
    <header className="relative py-5">
      <nav className="flex gap-8">
        {Object.entries(links).map(([link, label]) => (
          <Link
            href={link}
            key={link}
            className={
              router.pathname === link
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
