/* eslint-disable import/no-extraneous-dependencies */
import type { ComputedFields } from 'contentlayer/source-files';
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm'; 


export const Code = defineDocumentType(() => ({
  name: "Code",
  contentType: "mdx",
  filePathPattern: "codes/*.mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (code) =>
        code._raw.sourceFileName
          // hello-world.mdx => hello-world
          .replace(/\.mdx$/, ""),
    },
  },
}))
 
export default makeSource({
  // Location of source files for all defined documentTypes
  contentDirPath: "src/app/content",
  documentTypes: [Code],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },})