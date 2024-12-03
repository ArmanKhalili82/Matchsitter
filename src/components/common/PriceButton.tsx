import React from 'react'
import { CircleDollarSign } from 'lucide-react'

const PriceButton = () => {
  return (
    <div>
      <button className='flex h-[30px] w-[93px] bg-background-100 items-center justify-center gap-2 !rounded-100 text-textBody-300 typo-mob-body-sm mb-1'>
        <CircleDollarSign className='size-5 text-textBody-200' /> $30/hour
      </button>
      <button className='flex h-[30px] w-[93px] bg-background-300 items-center justify-center gap-2 !rounded-100 text-textBody-400 typo-mob-body-sm'>
        <CircleDollarSign className='size-5 text-textBody-200' /> $30/hour
      </button>
    </div>
  )
}

export default PriceButton
