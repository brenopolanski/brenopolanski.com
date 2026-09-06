export { cn } from 'cn'

export const blankToUndefined = (value: string | null | undefined): string | undefined => {
  const trimmed = value?.trim()
  return trimmed !== undefined && trimmed.length > 0 ? trimmed : undefined
}

export const generateReactKey = (
  prefix: string,
  identifier: string | number,
  index?: number,
): string => {
  const base = `${prefix}_${identifier}`
  return typeof index === 'number' ? `${base}_${index}` : base
}

export const isClient = typeof window !== 'undefined'
export const isServer = typeof window === 'undefined'
