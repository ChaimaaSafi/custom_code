import { allPosts, type Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

type TParams = {
  params: {
    slug: string;
  };
};

export default function SinglePostPage({ params: { slug } }: TParams) {
  const post = allPosts.filter((post) => post.slug === slug);
  const MDXContent = useMDXComponent(post[0]?.body.code);

  return (
    <div
      className="prose mx-auto mt-7 mb-10 flex max-w-[1250px] flex-col justify-between md:mb-24 lg:flex-row lg:space-x-5"
      style={{ wordBreak: "break-word" }}
    >
      <div
        className="w-full justify-between  px-5 lg:w-3/4"
        style={{ wordBreak: "break-word" }}
      >
        <MDXContent />
      </div>
    </div>
  );
}
