import { Post } from '@/types';
import dayjs from 'dayjs';
import Link from 'next/link';
import Row from '../layout/Row';

interface Props {
  post: Post;
}

export default function FeaturedPost({ post }: Props) {
  return (
    <Row>
      <Link href={`/posts/${post.fields.slug}`}>
        <span className="text-sm text-gray-500">
          {dayjs(post.fields.postedAt).format('MMMM Do, YYYY')}
        </span>
        <h2 className="text-lg">{post.fields.title}</h2>
        <p className="text-gray-500"> {post.fields.description}</p>
      </Link>
    </Row>
  );
}