'use client'

import { ChevronUp, ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'

const ToggleExpanding = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => setIsExpanded((prev) => !prev)
  return (
    <div className="relative mx-auto max-w-xl p-4">
      <div className="mb-3 flex justify-between gap-4">
        <div className="flex gap-1">
          <h2 className="text-textBody-300 typo-mob-title-md">Sara Bing</h2>
          <div className="flex h-5 w-7 rounded-50 bg-success justify-center items-center text-white typo-mob-title-sm">
            5.0
          </div>
        </div>
        <div className="text-textBody-200 typo-mob-body-sm">12/3/2024</div>
      </div>
      <div className={`relative overflow-hidden transition-all duration-300`}>
        <p
          className={`text-textBody-200 typo-mob-body-sm ${
            isExpanded ? '' : 'line-clamp-3'
          } transition-all duration-300`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>

        {!isExpanded && (
          <div className="pointer-events-none absolute bottom-0 left-0 h-6 w-full bg-gradient-to-t from-white to-transparent" />
        )}
      </div>

      <Button
        onClick={toggleExpand}
        variant="ghost"
        size="sm"
        className="mt-2 w-full typo-mob-button-sm"
      >
        {/* {isExpanded ? "Show Less ${LogOut}" : "Show More"} */}
        {isExpanded ? (
          <>
            Show Less <ChevronUp className="h-4 w-4" />
          </>
        ) : (
          <>
            Show More <ChevronDown className="h-4 w-4" />
          </>
        )}
      </Button>
    </div>
  )
}

export default ToggleExpanding
