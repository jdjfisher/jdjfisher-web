import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
}

export default function RowLink({ children, href }: Props) {
  return (
    <div className="group relative">
      <div className="w-[0.2rem] absolute h-full opacity-0 -translate-x-4 scale-y-50 bg-orange-500 transition group-hover:-translate-x-8 group-hover:scale-100 group-hover:opacity-100" />

      <a href={href}>{children}</a>
    </div>
  );
}
