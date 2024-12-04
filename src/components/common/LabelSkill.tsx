import { X } from 'lucide-react'
import React from 'react'

const LabelSkill = () => {
  return (
    <div>
      {/* <button className='flex h-8 bg-background-200 mb-1 text-textBody-300 justify-center items-center !rounded-100 gap-2 typo-mob-caption'>
        <div className='pointer-events-none block size-4 rounded-full bg-white'>
            <X className='size-3 text-icons-700' /> 
        </div>
        Childcare Expertise
      </button> */}
      <button className="flex h-8 w-auto px-2 items-center justify-center gap-2 rounded-full bg-background-200 text-textBody-300 typo-mob-caption">
        <div className="flex size-6 items-center justify-center rounded-full bg-background-100">
          <X className="size-4 text-icons-700" />
        </div>
        Childcare Expertise
      </button>
      {/* <button className='flex h-8 w-[155px] bg-background-200 text-textBody-300 justify-center items-center !rounded-100 gap-2 typo-mob-caption'>
        <div className='pointer-events-none block size-4 rounded-full bg-white'>
            <X className='size-3 text-icons-700' /> 
        </div>
        Childcare Expertise
      </button> */}
    </div>
  )
}

export default LabelSkill


//change heart sizes inprogress
//rounded-full inprogress
//label-skill color inprogress
//rounded-full inprogress
//x size inprogress
// center home inprogress
//yes or no focus remaining inprogress
//expanding shadows