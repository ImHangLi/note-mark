import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combine Tailwind CSS classes with custom classes
 */
export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
