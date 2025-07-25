import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogposts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      pubDate: z.date(),
      cover: image(),
      desc: z.string(),
      tags: z.array(z.string()),
      social: z
        .object({
          Twitter: z.string().url().optional(),
          Github: z.string().url().optional(),
          Youtube: z.string().url().optional(),
          Tiktok: z.string().url().optional(),
          Instagram: z.string().url().optional(),
        })
        .optional(),
    }),
});
export const collections = {
  blogs: blogposts,
};
