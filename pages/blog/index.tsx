import FeaturedBlogPost from '@/components/blog/FeaturedBlogPost';
import { getBlogPosts } from '@/lib/cms/bindings';
import { BlogPost } from '@/types';
import { GetStaticProps } from 'next';

interface Props {
  featured: BlogPost[];
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const featured = await getBlogPosts();

  return {
    props: { featured },
  };
};

export default function Blog({ featured }: Props) {
  return (
    <div className="space-y-5">
      <h1>Blog</h1>

      <p>Lorem ipsum dolor sit amet.</p>

      {featured.map((post) => (
        <FeaturedBlogPost post={post} key={post.fields.title} />
      ))}
    </div>
  );
}
