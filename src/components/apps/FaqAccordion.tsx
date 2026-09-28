'use client'

import { useEffect, useState } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ANALYTICS_EVENTS, trackEvent } from '@/lib/analytics'
import type { FaqItem } from '@/lib/markdown'
import { generateReactKey } from '@/lib/utils'

interface FaqAccordionProps {
  app: string
  items: FaqItem[]
}

export const FaqAccordion = ({ app, items }: FaqAccordionProps) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.replace(/^#/, '')

      if (items.some((item) => item.id === id)) {
        setValue(id)
      }
    }

    openFromHash()
    window.addEventListener('hashchange', openFromHash)

    return () => {
      window.removeEventListener('hashchange', openFromHash)
    }
  }, [items])

  return (
    <Accordion
      type="single"
      value={value}
      collapsible
      onValueChange={(next) => {
        setValue(next)

        if (next) {
          trackEvent(ANALYTICS_EVENTS.faqOpen, { app, faq: next })
        }
      }}
    >
      {items.map((item) => (
        <AccordionItem key={generateReactKey('faq', item.id)} value={item.id}>
          <AccordionTrigger className="text-lg font-semibold [&>svg]:stroke-4" id={item.id}>
            <span dangerouslySetInnerHTML={{ __html: item.questionHtml }} />
          </AccordionTrigger>
          <AccordionContent className="text-base">
            <div dangerouslySetInnerHTML={{ __html: item.answerHtml }} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
