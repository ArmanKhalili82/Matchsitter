import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  ["bg-primary text-primary-foreground shadow h-14 !rounded-100"],
  {
    variants: { 
      variant: {
        default:
      ["bg-primary text-primary-foreground shadow focus:bg-primary-300",
        "focus:bg-primary-300",
        "disabled:BG-200"
      ],outline:[
        "bg-white text-primary-100",
        "focus:bg-BG-100 focus:ring-primary ring-1",
        "disabled:bg-background-300"
      ],ghost:[
        "bg-white text-primary",
        "focus:bg-bg-100",
        "disabled:bg-B-100"
      ]
        
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
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
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className },))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
