'use client'

import { Button, type ButtonProps } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'
import SvgSpinners3DotsFade from '~icons/svg-spinners/3-dots-fade.jsx'
import { cn } from '@/lib/utils'

interface Props extends ButtonProps {
  clientPending?: boolean
}

export function SubmitButton({ children, disabled, className, clientPending, ...props }: Props) {
  const { pending, action } = useFormStatus()

  const isPending = pending && action === props.formAction

  return (
    <Button
      className={cn('h-12', className)}
      {...props}
      type="submit"
      disabled={pending || clientPending || disabled}
    >
      {isPending || clientPending ? <SvgSpinners3DotsFade className="my-0.5 text-lg" /> : children}
    </Button>
  )
}