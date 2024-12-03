import { Pen } from 'lucide-react'
import React from 'react'

const PenButton = () => {
  return (
    <div>
      <button className='size-8 bg-white ring-1 ring-border-200 p-1 !rounded-100 focus:bg-background-50'>
        <Pen />
      </button>
    </div>
  )
}

export default PenButton
