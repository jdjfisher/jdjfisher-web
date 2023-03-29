import RichText from '@/components/RichText';
import { getBlogPost, getBlogPosts } from '@/lib/cms/bindings';
import { BlogPost } from '@/types';
import dayjs from 'dayjs';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { z } from 'zod';

interface Props {
  post: BlogPost;
}

export async function getStaticPaths() {
  const posts = await getBlogPosts();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.fields.slug,
      },
    })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = z.string().parse(context.params?.slug);

  const post = await getBlogPost(slug);

  return {
    props: { post },
  };
};

export default function Post({ post }: Props) {
  return (
    <div className="w-full space-y-5">
      <div className="flex items-center justify-between">
        <h1>{post.fields.title}</h1>

        <div className="whitespace-nowrap">
          {dayjs(post.fields.updatedAt).format('MMMM Do, YYYY')}
        </div>
      </div>

      <div className="flex justify-items-end">
        <Link href="/blog" className="ml-auto text-gray-500">
          {'<-'} back
        </Link>
      </div>

      {/* @ts-ignore */}
      <RichText text={post.fields.content} />
    </div>
  );
}