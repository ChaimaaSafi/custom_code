/* eslint-disable import/no-extraneous-dependencies */
import type { ComputedFields } from 'contentlayer/source-files';
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm'; 



const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },

  slug: {
    type: 'string',
    resolve: (doc) =>
      // eslint-disable-next-line no-underscore-dangle
      doc._raw.sourceFileDir
        .replace('codes/', '')
        .replace(/[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}-/g, '')
        .toLocaleLowerCase(),
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: '**/*.mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    hero: { type: 'string', required: true },
    description: { type: 'string', required: true },
  },
computedFields

}))
 
export default makeSource({
  // Location of source files for all defined documentTypes
  contentDirPath: "src/app/posts",
  documentTypes: [Post],
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