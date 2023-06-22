import NavLink from './NavLink';

const links = {
  '/': 'Home',
  '/about': 'About',
  '/projects': 'Projects',
  '/posts': 'Posts',
} as const;

export default function Header() {
  return (
    <header className="relative py-5">
      <nav className="flex justify-between gap-8 sm:justify-start">
        {Object.entries(links).map(([link, label]) => (
          <NavLink link={link} label={label} key={link} />
        ))}
      </nav>
    </header>
  );
}
