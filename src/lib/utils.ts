import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges multiple class names using clsx and tailwind-merge
 * @param inputs - Class values to merge
 * @returns Merged class names
 * @example
 * cn('bg-red-500', 'text-white', 'p-4') // => 'bg-red-500 text-white p-4'
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

/**
 * Generates a unique key for React elements
 * @param prefix - Prefix for the key (usually component or list name)
 * @param identifier - Unique identifier (like id, slug, or other unique value)
 * @param index - Optional index for list items
 * @returns A string to be used as React key
 * @example
 * // Basic usage
 * generateReactKey('user', 'john-doe') // => 'user_john-doe'
 *
 * // With index
 * generateReactKey('list', 'item', 0) // => 'list_item_0'
 *
 * // With number identifier
 * generateReactKey('product', 123) // => 'product_123'
 */
export const generateReactKey = (prefix: string, identifier: string | number, index?: number): string => {
  const base = `${prefix}_${identifier}`
  return typeof index === 'number' ? `${base}_${index}` : base
}

/**
 * Validates an email address
 * @param email - The email address to validate
 * @returns true if the email is valid, false otherwise
 * @example
 * isValidEmail('test@example.com') // => true
 * isValidEmail('invalid-email') // => false
 */
export const isValidEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}
