import { Post } from '@/types';
import dayjs from 'dayjs';
import RowLink from '../layout/RowLink';

interface Props {
  post: Post;
}

export default function FeaturedPost({ post }: Props) {
  return (
    <RowLink href={`/posts/${post.slug}`}>
      <span className="text-sm text-gray-500">{dayjs(post.postedAt).format('MMMM Do, YYYY')}</span>
      <h2 className="text-lg">{post.title}</h2>
      <p className="text-gray-500"> {post.description}</p>
    </RowLink>
  );
}
