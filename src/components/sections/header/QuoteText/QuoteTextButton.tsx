'use client'

import { useState } from 'react'

import { QuoteIcon } from '@/components/Icons'
import { If } from '@/components/If'
import { Button } from '@/components/ui/button'

import { QuoteTextModal } from './QuoteTextModal'

export const QuoteTextButton = () => {
  const [showQuote, setShowQuote] = useState(false)

  return (
    <>
      <Button
        aria-label="View inspirational quote"
        className="cursor-pointer rounded-full p-2 transition-transform hover:scale-110"
        size="icon"
        variant="secondary"
        onClick={() => setShowQuote(true)}
      >
        <QuoteIcon className="size-5" />
      </Button>

      <If cond={showQuote}>
        <QuoteTextModal onClose={() => setShowQuote(false)} />
      </If>
    </>
  )
}
