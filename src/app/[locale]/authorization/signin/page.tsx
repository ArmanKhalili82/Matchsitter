import AuthHeader from '@/components/authHeader'
import SignInComponent from '@/components/pages/signin'
import { useTranslations } from 'next-intl'
import React from 'react'

const SignInPage = () => {
  const t = useTranslations('Auth')

  return (
    <React.Fragment>
      <AuthHeader />
      <SignInComponent />
    </React.Fragment>
  )
}

export default SignInPage