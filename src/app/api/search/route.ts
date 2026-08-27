import { createFromSource } from 'fumadocs-core/search/server'

import { source } from '@/lib/source'

// The structure plugin stringifies JSX flow elements (`<Cards>`, `<Card />`) as
// raw source, which would surface as markup in search results.
const isRawJsx = (content: string) => content.trimStart().startsWith('<')

export const { GET } = createFromSource(source, {
  language: 'english',
  // Stack, license and year live in frontmatter, so they are absent from the
  // MDX structured data. Append them as content so they stay searchable.
  buildIndex: async (page) => {
    const { structuredData, title, description, stack, license, year } = page.data
    const facts = [
      stack.length > 0 ? `Tech stack: ${stack.join(', ')}` : null,
      license ? `License: ${license}` : null,
      year ? `Year: ${year}` : null,
    ].filter((fact): fact is string => fact !== null)

    return {
      id: page.url,
      url: page.url,
      title,
      description,
      structuredData: {
        headings: structuredData.headings,
        contents: [
          ...structuredData.contents.filter(({ content }) => !isRawJsx(content)),
          ...facts.map((content) => ({ content, heading: undefined })),
        ],
      },
    }
  },
})
