import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A utility function to conditionally join class names together. It merges
 * Tailwind CSS classes without style conflicts.
 *
 * @param {...ClassValue[]} inputs - A list of class values to be merged.
 * @returns {string} The merged class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}