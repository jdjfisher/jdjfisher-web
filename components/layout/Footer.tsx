'use client';

import { ProfileLink } from '../ProfileLink';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer className="group grid grid-cols-3 border-t py-6 text-sm text-gray-400 md:border-t-0">
      <div className="space-x-8">
        <ProfileLink
          href="https://www.linkedin.com/in/jordan-fisher-2789b91a4/"
          short="in"
          full="LinkedIn"
        />
        <ProfileLink href="https://github.com/jdjfisher" short="gh" full="GitHub" />
      </div>

      <div>
        <button
          type="button"
          onClick={scrollToTop}
          className="-translate-y-2py-1 mx-auto hidden px-3 font-bold text-orange-500 opacity-0 transition hover:drop-shadow-2xl group-hover:translate-y-0 group-hover:opacity-100 sm:block"
        >
          ^
        </button>
      </div>

      <span className="text-right">Jordan Fisher © 2023</span>
    </footer>
  );
}
