"use client";

import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { useRouter } from "next/router";
import { allPosts } from "contentlayer/generated";

// export async function getStaticPaths() {
//   // Get a list of valid post paths.
//   const paths = allPosts.map((post) => ({
//     params: { slug: post._raw.flattenedPath },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps(context: any) {
//   // Find the post for the current page.
//   const post = allPosts.find(
//     (post) => post._raw.flattenedPath === context.params.slug
//   );

//   // Return notFound if the post does not exist.
//   if (!post) return { notFound: true };

//   // Return the post as page props.
//   return { props: { post } };
// }

export default function Page({ params }: any) {
  const post = allPosts[0];
  const MDXContent = useMDXComponent(post?.body?.code);

  return (
    <section className="w-full">
      <h1 className="mx-5 py-5 text-center text-2xl font-medium  lg:m-6 lg:p-10 lg:text-4xl">
        {post.title}
      </h1>
      <div className="mx-2 lg:h-auto lg:flex-1 mb-20">
        {/* <Image
          src={currentPost.hero}
          alt={currentPost.title}
          width="1000"
          height="600"
          className="rounded-lg shadow-lg object-cover"
          priority
          blurDataURL={`/_next/image?url=${currentPost.hero}&w=16&q=1`}
          placeholder="blur"
        /> */}
      </div>
      <div
        className="prose mx-auto mt-7 mb-10 flex max-w-[1250px] flex-col justify-between md:mb-24 lg:flex-row lg:space-x-5"
        style={{ wordBreak: "break-word" }}
      >
        <div
          className="w-full justify-between  px-5"
          style={{ wordBreak: "break-word" }}
        >
          <MDXContent />
        </div>
      </div>
    </section>
  );
}
