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
import { Link, useRouter } from '@/i18n/routing'
import { signInAction } from '@/lib/form/actions'
import { signInSchema } from '@/lib/form/validations/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/form/elements'
import type { SignInFormProps } from '@/lib/typescript/interfaces/forms.type'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useUserStore } from '@/lib/store/useUserStore'

export default function SignInComponent() {
  const t = useTranslations('SignIn')
  const tForm = useTranslations('FormSchema.sign_in')
  const { setUser, setProfile } = useUserStore()
  const router = useRouter()

  const { mutate, isPending } = useMutation({
    mutationFn: (data: SignInFormProps) => signInAction(data),
  })

  const form = useForm<SignInFormProps>({
    mode: 'onChange',
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: SignInFormProps) {
    mutate(data, {
      onError(error) {
        toast.error(error.message)
      },
      onSuccess(result) {
        if (result.status === 'fail') toast.error(t(result.message))
        if (result.status === 'success') {
          toast.success(t(result.message))
          if (result.data) {
            setUser(result!.data.user)
            if (result!.data.profile) {
              console.log(result!.data.profile)
              setProfile(result!.data.profile)
              //need to change to dashboard
              router.push('/dashboard/business-profile')
            } else {
              router.push('/complete-registration')
            }
          }
        }
      },
    })
  }

  return (
    <Form {...form}>
      <form
        className="flex h-full w-full flex-col p-4 sm:h-fit"
        onSubmit={form.handleSubmit(onSubmit)}
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
                  className="w-full"
                  placeholder={t('password-placeholder')}
                  visiblePassword="suffix"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="mt-4 flex justify-end">
          <Link className="text-secondary typo-desk-button-sm" href="/forget-password">
            {t('forgot')}
          </Link>
        </p>

        <div className="mt-auto flex w-full flex-col gap-4 pt-10">
          <SubmitButton clientPending={isPending}>{t('signin')}</SubmitButton>

          <p className="flex items-center justify-center gap-1">
            {t('message')}
            <Link role="button" className="text-button-lg-ds text-secondary" href="/authorization/signup">
              {t('signup')}
            </Link>
          </p>
        </div>
      </form>
    </Form>
  )
}
