import Toggle from '@/components/common/Toggle'
import ToggleExpanding from '@/components/common/ToggleExpanding'
import { Button } from '@/components/ui/button'
import Input from '@/components/ui/input'
import React from 'react'

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3">
      Develop here
      {/* <Button variant={'default'} loading={true} size="lg" disabled>
        default
      </Button>
      <Button variant={'outline'} size="md" disabled>
        outline
      </Button>
      <Button variant={'ghost'} size="sm" disabled>
        ghost
      </Button> */}
      {/* <Toggle /> */}
      {/* <ToggleExpanding /> */}
      <Input />
    </div>
  )
}

export default Page
