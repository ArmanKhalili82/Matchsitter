"use client";

import {ChevronUp, ChevronDown} from 'lucide-react'
import React, { useState } from "react";
import { Button } from "../ui/button"; 

const ToggleExpanding = () => {
    const [isExpanded, setIsExpanded] = useState(false); 

    const toggleExpand = () => setIsExpanded((prev) => !prev);
  return (
    <div className="relative p-4 max-w-xl mx-auto">
      <div className='flex gap-4 mb-3 justify-between'>
        <div className='flex gap-1'>
            <h2 className='text-textBody-300 typo-mob-title-md'>Sara Bing</h2>
            <div className='bg-success h-5 w-7 rounded-50 gap-3 py-1 px-1 text-white typo-mob-title-sm'>
                5.0
            </div>
        </div>
        <div className='text-textBody-200 typo-mob-body-sm'>
            12/3/2024
        </div>
      </div>
      <div className={`relative overflow-hidden transition-all duration-300`}>
        <p
          className={`text-textBody-200 typo-mob-body-sm ${
            isExpanded ? "" : "line-clamp-3"
          } transition-all duration-300`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}
      </div>

      <Button
        onClick={toggleExpand}
        variant="ghost"
        size="sm"
        className="mt-2 w-full"
      >
        {/* {isExpanded ? "Show Less ${LogOut}" : "Show More"} */}
        {isExpanded ? (
          <>
            Show Less <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            Show More <ChevronDown className="w-4 h-4" />
          </>
        )}
      </Button>
    </div>
  )
}

export default ToggleExpanding
