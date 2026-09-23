import type { Heading, PhrasingContent, Root, RootContent } from 'mdast'
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

const markdownProcessor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkCustomHeaderId)
  .use(remarkAlert)

const htmlProcessor = unified()
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
  .use(rehypeExternalLinks, { rel: ['noopener', 'noreferrer'], target: '_blank' })
  .use(rehypeStringify, { allowDangerousHtml: true })

export interface FaqItem {
  id: string
  questionHtml: string
  answerHtml: string
}

export interface RenderedAppMarkdown {
  html: string
  faq: FaqItem[]
}

const headingId = (heading: Heading) => {
  const data = heading.data as { id?: string } | undefined
  return data?.id
}

const isFaqHeading = (node: RootContent): node is Heading => {
  return node.type === 'heading' && node.depth === 2 && headingId(node) === 'faq'
}

const isQuestion = (node: RootContent): node is Heading => {
  return node.type === 'heading' && node.depth === 4
}

const nodesToHtml = async (nodes: RootContent[]) => {
  const tree: Root = { type: 'root', children: nodes }
  const transformed = await htmlProcessor.run(tree)
  return String(htmlProcessor.stringify(transformed))
}

const phrasingToHtml = async (nodes: PhrasingContent[]) => {
  const html = await nodesToHtml([{ type: 'paragraph', children: nodes }])
  return html.replace(/^<p>/, '').replace(/<\/p>\s*$/, '')
}

const toFaqItems = async (nodes: RootContent[]) => {
  const items: FaqItem[] = []
  let current: { heading: Heading; answer: RootContent[] } | undefined

  const flush = async () => {
    if (!current) {
      return
    }

    const id = headingId(current.heading)

    if (!id) {
      current = undefined
      return
    }

    items.push({
      id,
      questionHtml: await phrasingToHtml(current.heading.children),
      answerHtml: await nodesToHtml(current.answer),
    })
    current = undefined
  }

  for (const node of nodes) {
    if (isQuestion(node)) {
      await flush()
      current = { heading: node, answer: [] }
      continue
    }

    current?.answer.push(node)
  }

  await flush()

  return items
}

export const renderAppMarkdown = async (markdown: string): Promise<RenderedAppMarkdown> => {
  const parsed = markdownProcessor.parse(markdown)
  const root = (await markdownProcessor.run(parsed)) as Root
  const faqIndex = root.children.findIndex(isFaqHeading)

  if (faqIndex === -1) {
    return { html: await nodesToHtml(root.children), faq: [] }
  }

  const afterHeading = root.children.slice(faqIndex + 1)
  const firstQuestion = afterHeading.findIndex(isQuestion)
  const intro = firstQuestion === -1 ? afterHeading : afterHeading.slice(0, firstQuestion)
  const questions = firstQuestion === -1 ? [] : afterHeading.slice(firstQuestion)

  const html = await nodesToHtml([...root.children.slice(0, faqIndex + 1), ...intro])
  const faq = await toFaqItems(questions)

  return { html, faq }
}
