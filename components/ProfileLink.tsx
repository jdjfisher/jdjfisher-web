interface Props {
  href: string;
  text: string;
}

export const ProfileLink = ({ href, text }: Props) => {
  return (
    <code>
      <a href={href} className="group relative hover:drop-shadow-2xl">
        {'<'}
        {text}
        {' />'}

        <span className="absolute top-0 -left-4 whitespace-nowrap text-xs opacity-0 transition-all group-hover:-top-5 group-hover:opacity-40">
          {'<'}
          <span className="text-orange-500">a </span>
          href=
          <span className="text-purple-900">{`"${href}"`}</span>
          {'>'}
        </span>

        <span className=" absolute top-0 -left-4 whitespace-nowrap text-xs opacity-0 transition-all group-hover:top-5 group-hover:opacity-40">
          {'</'}
          <span className="text-orange-500">a</span>
          {'>'}
        </span>
      </a>
    </code>
  );
};
