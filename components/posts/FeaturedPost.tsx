import { Post } from '@/types';
import dayjs from 'dayjs';
import RowLink from '../layout/RowLink';

interface Props {
  post: Post;
}

export default function FeaturedPost({ post }: Props) {
  return (
    <RowLink href={`/posts/${post.fields.slug}`}>
      <span className="text-sm text-gray-500">
        {dayjs(post.fields.postedAt).format('MMMM Do, YYYY')}
      </span>
      <h2 className="text-lg">{post.fields.title}</h2>
      <p className="text-gray-500"> {post.fields.description}</p>
    </RowLink>
  );
}
