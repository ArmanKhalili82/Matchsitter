'use client'

import { SubmitButton } from '@/components/common/SubmitButton'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
// import Paragraph from '@/components/ui/Paragraph/Paragraph'
import { Link } from '@/i18n/routing'
import { signUpAction } from '@/lib/form/actions/signUp.action'
import { signInSchema } from '@/lib/form/validations/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useActionState, useEffect, useRef, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'
import { Input } from '@/components/form/elements'
import { toast } from 'sonner'

export default function SignUpComponent() {
  const t = useTranslations('SignUp')
  const tForm = useTranslations('FormSchema.sign_in')

  const [isPending, startTransition] = useTransition()
  const [state, onSubmitAction] = useActionState(signUpAction, {
    message: '',
    status: 'success',
  })

  const form = useForm<z.infer<typeof signInSchema>>({
    mode: 'onChange',
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
      ...(state?.fields ?? {}),
    },
  })

  useEffect(() => {
    state.message &&
      toast.error(state.message, {
        description: state.issues?.join('\n'),
        className: 'whitespace-pre-wrap',
        duration: 5000,
      })
  }, [state])

  const formRef = useRef<HTMLFormElement>(null)

  return (
    <Form {...form}>
      <form
        ref={formRef}
        className="mx-auto flex h-full w-full flex-col lg:max-w-lg"
        onSubmit={form.handleSubmit(() => {
          startTransition(() => onSubmitAction(new FormData(formRef.current!)))
        })}
        action={onSubmitAction}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('email')}</FormLabel>
              <FormControl>
                <Input className="w-full" placeholder="example@mail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mt-6">
              <FormLabel>{t('password-label')}</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  visiblePassword="suffix"
                  className="w-full"
                  placeholder={t('password-placeholder')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-auto flex w-full flex-col gap-4 pt-10">
          <SubmitButton clientPending={isPending} formAction={onSubmitAction}>
            {t('signup')}
          </SubmitButton>

          <p
            className="flex items-center justify-center gap-1"
          >
            {t('message')}
            <Link className="text-button-lg-ds text-secondary" href="/authorization/signin">
              {t('signin')}
            </Link>
          </p>
        </div>
      </form>
    </Form>
  )
}