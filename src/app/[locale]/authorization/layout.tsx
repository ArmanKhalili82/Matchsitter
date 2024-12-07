import AuthHeader from '@/components/authHeader'
import React, { type PropsWithChildren } from 'react'

const AuthLayout = ({ children }: PropsWithChildren) => {
  return <div className='justify-center items-center'>
      <AuthHeader />      
    {children}
  </div>
}

export default AuthLayout
