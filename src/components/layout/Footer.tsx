import { ProfileLink } from '../ProfileLink';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer className="group grid grid-cols-2 border-t py-6 text-sm text-gray-400 sm:grid-cols-3 md:border-t-0">
      <div className="space-x-4 sm:space-x-8">
        <ProfileLink
          href="https://www.linkedin.com/in/jordan-fisher-2789b91a4/"
          short="in"
          full="LinkedIn"
        />
        <ProfileLink href="https://github.com/jdjfisher" short="gh" full="GitHub" />
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        className="hidden -translate-y-2 justify-self-center py-1 px-3 font-bold text-orange-500 opacity-0 transition hover:drop-shadow-2xl group-hover:translate-y-0 group-hover:opacity-100 sm:block"
      >
        ^
      </button>

      <span className="text-right">Jordan Fisher © 2023</span>
    </footer>
  );
}
