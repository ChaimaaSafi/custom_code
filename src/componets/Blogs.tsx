import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";

function Blogs() {
  const posts = allPosts;
  return (
    <div className="h-screen px-3 py-36" id="blog">
      <h2 className="text-2xl w-full capitalize font-semibold text-yellow-primary mb-5">
        Blogs
      </h2>
      <motion.div className="h-full flex justify-center mt-10">
        <motion.div id="carousel" className="w-full h-[500px]">
          <motion.div className="flex h-full space-x-4" id="carousel-container">
            {allPosts.map(({ hero, title, description, _raw }, index) => (
              <motion.div key={index}>
                <Link
                  href={`blogs/${_raw.flattenedPath}`}
                  target="_blank"
                  className="pb-5 w-[500px] flex flex-col rounded-md h-full bg-[conic-gradient(at_left,_var(--tw-gradient-stops))]
                   from-yellow-500 via-purple-500 to-blue-500 shadow-lg shadow-gray-500"
                >
                  <div className="relative h-[300px] w-full rounded-md">
                    <Image
                      src={hero}
                      alt={title}
                      priority
                      fill
                      className="object-cover rounded-md"
                    />{" "}
                  </div>
                  <h2 className="text-lg font-medium text-blue-950 mt-8 px-3 w-full">
                    {title}
                  </h2>
                  <p className="text-base text-gray-100 mt-4 px-3 text-justify">
                    {description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Blogs;
