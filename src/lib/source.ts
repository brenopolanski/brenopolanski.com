import { loader } from 'fumadocs-core/source'
import { pageSchema } from 'fumadocs-core/source/schema'
import { defineDocs } from 'fumadocs-mdx/macro'
import { z } from 'zod'

export const projectLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
  icon: z.string().optional(),
})

export const projectImageSchema = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.number(),
  height: z.number(),
  layout: z.enum(['hero', 'grid']).default('grid'),
})

export const portfolioPageSchema = pageSchema.extend({
  license: z.string().optional(),
  year: z.number().optional(),
  stack: z.array(z.string()).default([]),
  links: z.array(projectLinkSchema).default([]),
  images: z.array(projectImageSchema).default([]),
})

export type ProjectLink = z.infer<typeof projectLinkSchema>
export type ProjectImage = z.infer<typeof projectImageSchema>

const docs = defineDocs({
  dir: 'content/portfolio',
  docs: {
    schema: portfolioPageSchema,
  },
})

export const source = loader({
  baseUrl: '/portfolio',
  source: docs.toFumadocsSource(),
})
