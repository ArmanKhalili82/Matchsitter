import React from 'react'

const PendingButtons = () => {
  return (
    <div>
      <button className='h-[31px] w-20 bg-success-success_light !rounded-100 text-success typo-mob-label justify-center items-center'>
        ompleted
      </button>
      <button className='h-[31px] w-[71px] bg-info-info_light !rounded-100 text-info typo-mob-label justify-center items-center'>
        Reserved
      </button>
      <button className='h-[31px] w-[71px] !rounded-100 bg-error-success_light text-error typo-mob-label justify-center items-center'>
        Canceled
      </button>
    </div>
  )
}

export default PendingButtons
