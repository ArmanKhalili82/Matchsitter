import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import SvgSpinners3DotsFade from '~icons/svg-spinners/3-dots-fade.jsx'

import { cn } from '@/lib/utils'

const buttonVariants = cva(['group relative flex w-auto items-center justify-center gap-2'], {
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
      textButton: ['text-primary focus:text-primary-300'],
      penButton: ['bg-white p-1 text-icons-700 ring-1 ring-border-200 focus:bg-background-100'],
    },
    size: {
      sm: 'h-10 rounded-md px-3 typo-mob-button-sm',
      // add typography
      lg: 'h-14 rounded-md px-8',
      md: 'h-12 rounded-md px-8 typo-mob-button-md',
      icon: 'size-8',
    },
    rounded: {
      default: '!rounded-100',
      icon: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'lg',
    rounded: 'default',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, loading, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            rounded,
            className: cn({ 'loading pointer-events-none [&>*]:invisible': loading }, className),
          })
        )}
        ref={ref}
        {...props}
      >
        <div className="contents">{children}</div>
        <div className="invisible absolute inset-0 flex items-center justify-center group-[.loading]:!visible">
          <SvgSpinners3DotsFade />
        </div>
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
