// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var Code = defineDocumentType(() => ({
  name: "Code",
  contentType: "mdx",
  filePathPattern: "codes/*.mdx",
  fields: {
    title: {
      type: "string",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (code) => code._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
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
            className: ["anchor"]
          }
        }
      ]
    ]
  }
});
export {
  Code,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-X6ENXNEW.mjs.map
