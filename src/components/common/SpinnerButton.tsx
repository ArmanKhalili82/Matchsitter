'use client'
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

const SpinnerButton = () => {
  const [hours, setHours] = useState(1)

  const addHour = () => setHours((prev) => prev + 1)
  const subtractHour = () => {
    if (hours > 0) setHours((prev) => prev - 1)
  }

  return (
    <div className="flex items-center justify-center gap-4 p-4">
      <button
        className="flex h-8 w-8 items-center justify-center !rounded-100 bg-gray-300 text-icons-700"
        onClick={subtractHour}
      >
        <Minus className="size-6" />
      </button>

      <div className="text-textBody-400 typo-desk-body-sm">
        {hours} Hour{hours !== 1 ? 's' : ''}
      </div>

      <button
        className="flex h-8 w-8 items-center justify-center !rounded-100 bg-gray-300 text-lg text-icons-700"
        onClick={addHour}
      >
        <Plus />
      </button>
    </div>
  )
}

export default SpinnerButton
