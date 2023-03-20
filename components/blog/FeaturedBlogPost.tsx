import { BlogPost } from '@/types';
import dayjs from 'dayjs';
import Link from 'next/link';

interface Props {
  post: BlogPost;
}

export default function FeaturedBlogPost({ post }: Props) {
  return (
    <div className="group flex">
      <div className="w-1 flex-grow -translate-x-2 scale-y-50 bg-orange-500 opacity-0 transition  group-hover:-translate-x-5 group-hover:scale-100 group-hover:opacity-100" />

      <Link href={`/blog/${post.fields.slug}`} className="peer">
        <span className="text-sm text-gray-500">{dayjs().format('MMMM Do, YYYY')}</span>
        <h2 className="text-lg">{post.fields.title}</h2>
        <p className="text-gray-500"> {post.fields.description}</p>
      </Link>
    </div>
  );
}
