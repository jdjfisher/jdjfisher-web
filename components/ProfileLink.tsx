interface Props {
  href: string;
  short: string;
  full: string;
}

export const ProfileLink = ({ href, short, full }: Props) => {
  return (
    <code className="relative">
      <a
        href={href}
        className="group peer relative hover:drop-shadow-2xl hover:text-black transition"
        aria-label={full}
      >
        {'<'}
        {short}
        {' />'}
      </a>

      <span className="absolute top-0 -left-4 -z-10 whitespace-nowrap text-xs opacity-0 transition-all peer-hover:-top-5 peer-hover:opacity-40">
        {'<'}
        <span className="text-orange-500">a </span>
        href=
        <span className="text-purple-900">{`"${href}"`}</span>
        {'>'}
      </span>

      <span className="absolute top-0 -left-4 -z-10 whitespace-nowrap text-xs opacity-0 transition-all peer-hover:top-5 peer-hover:opacity-40">
        {'</'}
        <span className="text-orange-500">a</span>
        {'>'}
      </span>
    </code>
  );
};
