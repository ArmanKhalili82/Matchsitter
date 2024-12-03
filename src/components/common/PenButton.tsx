import { Pen } from 'lucide-react'
import React from 'react'

const PenButton = () => {
  return (
    <div>
      <button className="size-8 !rounded-100 bg-white p-1 text-icons-700 ring-1 ring-border-200 focus:bg-background-100">
        <Pen />
      </button>
    </div>
  )
}

export default PenButton
