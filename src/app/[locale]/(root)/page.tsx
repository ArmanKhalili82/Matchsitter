import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      Develop here
      <Button variant={'outline'} disabled>
        Choose
      </Button>
    </div>
  )
}

export default Page
