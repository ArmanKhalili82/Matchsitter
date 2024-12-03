import React from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

const RadioButton = () => {
  return (
    <div>
      <RadioGroup>
        <div className='flex bg-surface-100 p-2 h-[42px] w-[68px] gap-1 ring-1 ring-border-200 focus:ring-primary !rounded-100 text-textBody-300 typo-mob-body-lg'>
          <RadioGroupItem value="Yes" id="r1" />
          <Label htmlFor="r1">Yes</Label>
        </div>
        <div className='flex bg-surface-100 p-2 h-[42px] w-[68px] gap-2 ring-1 ring-border-200 focus:ring-primary !rounded-100 text-textBody-300 typo-mob-body-lg'>
          <RadioGroupItem value="No" id="r2" />
          <Label htmlFor="r2">No</Label>
        </div>
      </RadioGroup>
    </div>
  )
}

export default RadioButton
