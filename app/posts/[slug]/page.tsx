import RichText from '@/components/RichText';
import { getPost, getPosts } from '@/lib/cms/bindings';
import dayjs from 'dayjs';
import Link from 'next/link';
import { z } from 'zod';

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.fields.slug,
  }));
}

export default async function Post({ params }: any) {
  const slug = z.string().parse(params?.slug);

  const post = await getPost(slug);

  return (
    <div className="w-full space-y-5">
      <div className="items-center justify-between sm:flex">
        <h1>{post.fields.title}</h1>

        <div className="whitespace-nowrap">
          {dayjs(post.fields.updatedAt).format('MMMM Do, YYYY')}
        </div>
      </div>

      <div className="flex justify-items-end">
        <Link href="/posts" className="ml-auto text-gray-500">
          {'<-'} back
        </Link>
      </div>

      {/* @ts-ignore */}
      <RichText text={post.fields.content} />
    </div>
  );
}
