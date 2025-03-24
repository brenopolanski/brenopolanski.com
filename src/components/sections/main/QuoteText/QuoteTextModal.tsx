import Link from 'next/link'
import { useState } from 'react'

import { XIcon } from '@/components/Icons'

import { quoteText } from './quoteText'

interface IQuoteTextModalProps {
  onClose: () => void
}

export const QuoteTextModal = ({ onClose }: IQuoteTextModalProps) => {
  const [quoteLanguage, setQuoteLanguage] = useState<'en' | 'pt-br'>('en')

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6 md:p-8">
      <button
        className="absolute right-2 top-2 z-[60] cursor-pointer rounded-full bg-white p-2 text-black transition-colors hover:bg-gray-100 sm:right-4 sm:top-4"
        onClick={(event) => {
          event.stopPropagation()
          onClose()
        }}
      >
        <XIcon className="size-4 sm:size-5" />
        <span className="sr-only">Close quote</span>
      </button>

      <div className="relative w-full max-w-2xl rounded-lg bg-transparent p-4 text-white sm:p-6">
        <div className="mb-4 flex justify-center gap-2">
          <button
            className={`cursor-pointer rounded px-3 py-1 text-sm transition-colors ${
              quoteLanguage === 'en' ? 'bg-white text-black' : 'bg-transparent text-white/60 hover:text-white'
            }`}
            onClick={(event) => {
              event.stopPropagation()
              setQuoteLanguage('en')
            }}
          >
            EN
          </button>
          <button
            className={`cursor-pointer rounded px-3 py-1 text-sm transition-colors ${
              quoteLanguage === 'pt-br' ? 'bg-white text-black' : 'bg-transparent text-white/60 hover:text-white'
            }`}
            onClick={(event) => {
              event.stopPropagation()
              setQuoteLanguage('pt-br')
            }}
          >
            PT-BR
          </button>
        </div>
        <div className="space-y-4 sm:space-y-6">
          <p className="max-h-[70vh] overflow-y-auto pr-4 text-justify font-['Playfair_Display'] text-base leading-relaxed sm:text-lg md:text-xl">
            <span className="mb-4 block font-bold">{quoteText[quoteLanguage].title}</span>
            {quoteText[quoteLanguage].text}
          </p>
          <div className="space-y-2 text-right">
            <p className="font-['Playfair_Display'] text-xs italic sm:text-sm">- by Zeno & Carol</p>
            <Link
              className="text-xs text-gray-400 transition-colors hover:text-white"
              href="https://zenorocha.com/reminder"
              rel="noopener noreferrer"
              target="_blank"
            >
              Source: zenorocha.com/reminder
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
