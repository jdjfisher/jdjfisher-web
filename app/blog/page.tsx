import FeaturedBlogPost from '@/components/blog/FeaturedBlogPost';
import { getBlogPosts } from '@/lib/cms/bindings';

export default async function Blog() {
  const featured = await getBlogPosts();

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
