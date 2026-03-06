import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    author: z.object({
      name: z.string(),
      href: z.string(),
      avatar: z.string().optional(),
    }),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
