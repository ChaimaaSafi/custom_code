"use client";

import Blogs from "@/componets/Blogs";

export default function Home() {
  return (
    <section className="md:max-w-[1000px] py-10 md:py-20  w-full px-3 md:mx-auto flex flex-col space-y-6">
      <Blogs />
    </section>
  );
}
