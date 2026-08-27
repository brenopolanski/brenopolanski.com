import { Card, Cards } from 'fumadocs-ui/components/card'
import defaultMdxComponents from 'fumadocs-ui/mdx'
import type { MDXComponents } from 'mdx/types'

export const getMDXComponents = (components?: MDXComponents): MDXComponents => ({
  ...defaultMdxComponents,
  Card,
  Cards,
  ...components,
})
