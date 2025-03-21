'use client'

import { motion } from 'motion/react'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { cn } from '@/lib/utils'

interface ILetterState {
  char: string
  isMatrix: boolean
  isSpace: boolean
}

interface IMatrixTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string
  textClassName?: string
  initialDelay?: number
  letterAnimationDuration?: number
  letterInterval?: number
}

export const MatrixText = ({
  text = 'HelloWorld!',
  textClassName,
  className,
  initialDelay = 200,
  letterAnimationDuration = 500,
  letterInterval = 100,
}: IMatrixTextProps) => {
  const [letters, setLetters] = useState<ILetterState[]>(() =>
    text.split('').map((char) => ({
      char,
      isMatrix: false,
      isSpace: char === ' ',
    })),
  )
  const [isAnimating, setIsAnimating] = useState(false)

  const getRandomChar = useCallback(() => (Math.random() > 0.5 ? '1' : '0'), [])

  const animateLetter = useCallback(
    (index: number) => {
      if (index >= text.length) {
        return
      }

      requestAnimationFrame(() => {
        setLetters((prev) => {
          const newLetters = [...prev]

          if (!newLetters[index].isSpace) {
            newLetters[index] = {
              ...newLetters[index],
              char: getRandomChar(),
              isMatrix: true,
            }
          }

          return newLetters
        })

        setTimeout(() => {
          setLetters((prev) => {
            const newLetters = [...prev]

            newLetters[index] = {
              ...newLetters[index],
              char: text[index],
              isMatrix: false,
            }

            return newLetters
          })
        }, letterAnimationDuration)
      })
    },
    [getRandomChar, letterAnimationDuration, text],
  )

  const startAnimation = useCallback(() => {
    if (isAnimating) {
      return
    }

    setIsAnimating(true)
    let currentIndex = 0

    const animate = () => {
      if (currentIndex >= text.length) {
        setIsAnimating(false)
        return
      }

      animateLetter(currentIndex)
      currentIndex++
      setTimeout(animate, letterInterval)
    }

    animate()
  }, [animateLetter, isAnimating, letterInterval, text])

  useEffect(() => {
    const timer = setTimeout(startAnimation, initialDelay)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const motionVariants = useMemo(
    () => ({
      matrix: {
        color: '#00ff00',
        textShadow: '0 2px 4px rgba(0, 255, 0, 0.5)',
      },
    }),
    [],
  )

  return (
    <div
      aria-label="Matrix text animation"
      className={cn('flex items-center justify-center text-black dark:text-white', className)}
    >
      <div className="flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center">
          {letters.map((letter, index) => (
            <motion.div
              key={`${index}-${letter.char}`}
              animate={letter.isMatrix ? 'matrix' : 'normal'}
              className={cn('w-[1ch] overflow-hidden text-center font-mono text-4xl md:text-6xl', textClassName)}
              initial="initial"
              style={{
                display: 'inline-block',
                fontVariantNumeric: 'tabular-nums',
              }}
              transition={{
                duration: 0.1,
                ease: 'easeInOut',
              }}
              variants={motionVariants}
            >
              {letter.isSpace ? '\u00A0' : letter.char}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
