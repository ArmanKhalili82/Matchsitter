import React from 'react'
import { CircleDollarSign } from 'lucide-react'

const PriceButton = () => {
  return (
    <div>
      <button className="mb-1 flex h-[30px] w-auto items-center justify-center gap-2 rounded-full bg-background-100 p-1.5 text-textBody-300 typo-mob-body-sm">
        <CircleDollarSign className="size-5 text-textBody-200" /> $30/hour
      </button>
      {/* <button className="flex h-[30px] w-auto p-1.5 items-center justify-center gap-2 rounded-full bg-background-300 text-textBody-400 typo-mob-body-sm">
        <CircleDollarSign className="size-5 text-textBody-200" /> $30/hour
      </button> */}
    </div>
  )
}

export default PriceButton
