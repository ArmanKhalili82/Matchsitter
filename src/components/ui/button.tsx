import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  [
    'group relative flex h-14 w-auto items-center justify-center !rounded-100 bg-primary text-primary-foreground',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-primary text-textBody-50',
          'focus:bg-primary-300',
          'disabled:bg-background-200 disabled:text-textBody-100',
        ],
        outline: [
          'bg-white text-primary ring-1 focus:ring-primary',
          'focus:bg-background-100',
          'disabled:text-textBody-100 disabled:ring-border-300',
        ],
        ghost: ['bg-white text-primary', 'focus:bg-background-100', 'disabled:text-textBody-100'],
      },
      size: {
        sm: 'h-10 rounded-md px-3 text-xs typo-mob-button-sm',
        // add typography
        lg: 'h-14 rounded-md px-8',
        md: 'h-12 rounded-md px-8 typo-mob-button-md',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'lg',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, loading, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            className: cn({ 'loading [&>*]:invisible': loading }, className),
          })
        )}
        ref={ref}
        {...props}
      >
        <div className="contents">{children}</div>
        <div className="invisible absolute inset-0 flex items-center justify-center group-[.loading]:!visible">
          Loading
        </div>
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
