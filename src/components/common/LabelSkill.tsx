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
      <button className='flex h-8 w-[155px] bg-background-200 text-textBody-300 justify-center items-center !rounded-100 gap-2 typo-mob-caption'>
        <div className='flex justify-center items-center w-4 h-4 rounded-full bg-white'>
          <X className='w-3 h-3 text-icons-700' />
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
