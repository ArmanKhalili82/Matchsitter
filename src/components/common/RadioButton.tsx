import React from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

const RadioButton = () => {
  return (
    <div>
      <RadioGroup>
        <div className="flex h-[42px] w-[68px] items-center gap-3 !rounded-100 bg-surface-100 p-2 text-textBody-300 ring-1 ring-border-200 focus-within:ring-primary">
          <RadioGroupItem
            value="Yes"
            id="r1"
            className="h-4 w-4 rounded-full border border-border-200 focus:ring-1 focus:ring-primary"
          />
          <Label className="cursor-pointer" htmlFor="r1">
            Yes
          </Label>
        </div>
        <div className="flex h-[42px] w-[68px] items-center gap-3 !rounded-100 bg-surface-100 p-2 text-textBody-300 ring-1 ring-border-200 focus-within:ring-primary">
          <RadioGroupItem
            value="No"
            id="r2"
            className="h-4 w-4 rounded-full border border-border-200 focus:ring-1 focus:ring-primary"
          />
          <Label className="cursor-pointer" htmlFor="r2">
            No
          </Label>
        </div>
        {/* <div className="flex h-[42px] w-[68px] gap-2 !rounded-100 bg-surface-100 p-2 text-textBody-300 ring-1 ring-border-200 typo-mob-body-lg focus:ring-primary">
          <RadioGroupItem value="No" id="r2" />
          <Label className='py-1' htmlFor="r2">No</Label>
        </div> */}
      </RadioGroup>
    </div>
  )
}

export default RadioButton
