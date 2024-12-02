// "use client";

// import React, { useState } from "react";
// import { Button } from "../ui/button";

// const Toggle = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <div className="p-4 max-w-xl mx-auto">
//       <div
//         className={`overflow-hidden transition-all duration-300 ${
//           isExpanded ? "line-clamp-none" : "line-clamp-3"
//         }`}
//       >
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//         minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//         aliquip ex ea commodo consequat. Duis aute irure dolor in
//         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//         culpa qui officia deserunt mollit anim id est laborum.
//       </div>
//       <Button
//         onClick={() => setIsExpanded((prev) => !prev)}
//         variant="ghost"
//         className="mt-2"
//       >
//         {isExpanded ? "Show Less" : "Show More"}
//       </Button>
//     </div>
//   );
// };

// export default Toggle;

'use client'

import { ChevronUp, ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'

const Toggle = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => setIsExpanded((prev) => !prev)

  return (
    <div className="relative mx-auto max-w-xl p-4">
      <div className={`relative overflow-hidden transition-all duration-300`}>
        <p
          className={`text-gray-800 typo-mob-body-lg ${
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
          <div className="pointer-events-none absolute bottom-0 left-0 h-2 w-full bg-gradient-to-t from-white to-transparent" />
        )}
      </div>

      <Button onClick={toggleExpand} variant="ghost" size="sm" className="mt-2 w-full">
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

export default Toggle
