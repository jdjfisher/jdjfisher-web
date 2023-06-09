import FeaturedPost from '@/components/posts/FeaturedPost';
import { getPosts } from '@/lib/cms/bindings';

export default async function Post() {
  const featured = await getPosts();

  return (
    <div className="space-y-5">
      <h1>Posts</h1>

      <p>Lorem ipsum dolor sit amet.</p>

      <div className="space-y-10">
        {featured.map((post) => (
          <FeaturedPost post={post} key={post.fields.title} />
        ))}
      </div>
    </div>
  );
}
