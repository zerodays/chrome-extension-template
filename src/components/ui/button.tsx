import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'ex-inline-flex ex-items-center ex-justify-center ex-whitespace-nowrap ex-rounded-md ex-text-sm ex-font-medium ex-ring-offset-background ex-transition-colors focus-visible:ex-outline-none focus-visible:ex-ring-2 focus-visible:ex-ring-ring focus-visible:ex-ring-offset-2 disabled:ex-pointer-events-none disabled:ex-opacity-50',
  {
    variants: {
      variant: {
        default:
          'ex-bg-primary ex-text-primary-foreground hover:ex-bg-primary/90',
        destructive:
          'ex-bg-destructive ex-text-destructive-foreground hover:ex-bg-destructive/90',
        outline:
          'ex-border ex-border-input ex-bg-background hover:ex-bg-accent hover:ex-text-accent-foreground',
        secondary:
          'ex-bg-secondary ex-text-secondary-foreground hover:ex-bg-secondary/80',
        ghost: 'hover:ex-bg-accent hover:ex-text-accent-foreground',
        link: 'ex-text-primary ex-underline-offset-4 hover:ex-underline',
      },
      size: {
        default: 'ex-h-10 ex-px-4 ex-py-2',
        sm: 'ex-h-9 ex-rounded-md ex-px-3',
        lg: 'ex-h-11 ex-rounded-md ex-px-8',
        icon: 'ex-h-10 ex-w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
