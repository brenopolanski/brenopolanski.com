import type { JsonLdGraph } from '@/lib/jsonld'

interface JsonLdProps {
  data: JsonLdGraph
}

export const JsonLd = ({ data }: JsonLdProps) => {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
      type="application/ld+json"
    />
  )
}
