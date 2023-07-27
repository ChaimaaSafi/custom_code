import { allPosts, type Post } from "contentlayer/generated";
import Link from "next/link";

export default function PostListPage() {
  const posts = allPosts.map((post) => post);

  return (
    <div>
      <h1>Blog</h1>

      {posts.map((post: any) => (
        <div key={post.slug}>
          <h2>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
}
