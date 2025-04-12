import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to conditionally join class names and merge Tailwind conflicts
 */
export function cn(...input: ClassValue[]) {
  return twMerge(clsx(...input));
}
