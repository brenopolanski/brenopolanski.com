import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs))
}

export const generateReactKey = (
  prefix: string,
  identifier: string | number,
  index?: number,
): string => {
  const base = `${prefix}_${identifier}`
  return typeof index === 'number' ? `${base}_${index}` : base
}

export const isValidEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}
