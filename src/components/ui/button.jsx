import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Adapted from shadcn/ui (MIT), with ProGear colours and 48px touch targets.
// https://github.com/shadcn-ui/ui/blob/main/apps/v4/registry/new-york-v4/ui/button.tsx
const buttonVariants = cva(
  'inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-neutral-400/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-neutral-900 text-white hover:bg-neutral-800',
        destructive: 'bg-red-600 text-white hover:bg-red-700',
        outline: 'border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100',
        secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200',
        ghost: 'text-neutral-900 hover:bg-neutral-100',
        link: 'text-neutral-900 underline-offset-4 hover:underline',
      },
      size: {
        default: 'min-h-12 px-5 py-3',
        sm: 'min-h-11 px-3 py-2',
        lg: 'min-h-12 px-6 py-3',
        icon: 'size-12',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
);
const Button = forwardRef(function Button({ className, variant, size, asChild = false, ...props }, ref) {
  const Comp = asChild ? Slot : 'button';
  return <Comp ref={ref} data-slot="button" className={twMerge(clsx(buttonVariants({ variant, size }), className))} {...props} />;
});
export { Button, buttonVariants };
