import { ProfileLink } from '../ProfileLink';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer className="flex justify-between py-6">
      <button type="button" onClick={scrollToTop} className="group flex gap-4">
        designed by me
        <span className="-translate-x-2 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
          ^
        </span>
      </button>

      <div className="space-x-8">
        <ProfileLink href="https://www.linkedin.com/in/jordan-fisher-2789b91a4/" text="Li" />
        <ProfileLink href="https://github.com/jdjfisher" text="Gh" />
      </div>
    </footer>
  );
}
