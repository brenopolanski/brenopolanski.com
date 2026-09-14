import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkCustomHeaderId from 'remark-custom-header-id'
import remarkGfm from 'remark-gfm'
import { remarkAlert } from 'remark-github-blockquote-alert'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkCustomHeaderId)
  .use(remarkAlert)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
  .use(rehypeExternalLinks, { rel: ['noopener', 'noreferrer'], target: '_blank' })
  .use(rehypeStringify, { allowDangerousHtml: true })

export const renderMarkdown = async (markdown: string) => {
  const file = await processor.process(markdown)
  return String(file)
}
