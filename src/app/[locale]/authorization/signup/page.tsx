import SignUpComponent from '@/components/pages/signup'
import { useTranslations } from 'next-intl'
import React from 'react'

const SignUpPage = () => {
  const t = useTranslations('Auth')
  return (
    <React.Fragment>
      <SignUpComponent />
    </React.Fragment>
  )
}

export default SignUpPage