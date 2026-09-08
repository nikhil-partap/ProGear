import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
// Adapted from shadcn/ui input (MIT): neutral colours and larger touch target.
// https://github.com/shadcn-ui/ui/blob/main/apps/v4/registry/new-york-v4/ui/input.tsx
export function Input({ className, type, ...props }) {
  return <input type={type} data-slot="input" className={twMerge(clsx(
    'h-12 w-full min-w-0 rounded-md border border-neutral-300 bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-neutral-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
    'focus-visible:border-neutral-500 focus-visible:ring-[3px] focus-visible:ring-neutral-400/50 aria-invalid:border-red-600 aria-invalid:ring-red-600/20', className
  ))} {...props} />;
}
