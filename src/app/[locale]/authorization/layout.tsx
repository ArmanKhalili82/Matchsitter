
import AuthHeader from '@/components/authHeader'
import React, { type PropsWithChildren } from 'react'

const AuthLayout = ({children}:PropsWithChildren) => {
  return (
    <div>
     
      {children}
    </div>
  )
}

export default AuthLayout
