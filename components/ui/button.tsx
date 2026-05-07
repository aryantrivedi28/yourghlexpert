import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nurture-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        cta: 'bg-capture-yellow text-space-blue hover:bg-capture-yellow-light hover:-translate-y-0.5 hover:shadow-lg',
        ghost: 'border border-white/30 bg-transparent text-white hover:border-capture-yellow hover:text-capture-yellow',
        nurture: 'bg-nurture-blue text-white hover:bg-nurture-blue-dark hover:-translate-y-0.5 hover:shadow-lg',
        outline: 'border-2 border-nurture-blue bg-transparent text-nurture-blue hover:bg-nurture-blue hover:text-white',
      },
      size: {
        default: 'px-5 py-2.5 text-sm',
        sm: 'px-4 py-2 text-xs',
        lg: 'px-7 py-3.5 text-base',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'cta',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }