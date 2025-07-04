import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from 'lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-white text-sm font-semibold shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-sm font-semibold text-white shadow-sm hover:bg-destructive/90',
        outline:
          'border-2 text-sm font-semibold border-primary text-primary bg-transparent shadow-sm hover:bg-primary hover:text-white tracking-wide',
        secondary:
          'bg-accent font-semibold text-sm text-secondary-foreground shadow-sm hover:bg-accent/50',
        ghost: 'hover:bg-accent border-[1.5px] font-semibold text-sm hover:text-accent-foreground',
        link: 'text-sm text-primary'
      },
      size: {
        default: 'h-9 px-6 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);


const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
