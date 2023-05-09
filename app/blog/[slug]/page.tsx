import RichText from '@/components/RichText';
import { getBlogPost, getBlogPosts } from '@/lib/cms/bindings';
import dayjs from 'dayjs';
import Link from 'next/link';
import { z } from 'zod';

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.fields.slug,
  }));
}

export default async function Post({ params }: any) {
  const slug = z.string().parse(params?.slug);

  const post = await getBlogPost(slug);

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
