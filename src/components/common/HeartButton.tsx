import { Heart } from 'lucide-react'
import React from 'react'

const HeartButton = ({ action }: { action: 'active' | 'inactive' }) => {
  return (
    <div>
      <button className="flex items-center justify-center">
        {action === 'active' ? (
          // Active Button
          <Heart className="h-[18px] w-auto fill-secondary text-secondary" />
        ) : (
          // Inactive Button
          <Heart className="h-[18px] w-auto text-secondary" />
        )}
      </button>
    </div>
  )
}

export default HeartButton

// import { Heart } from 'lucide-react'
// import React from 'react'

// const HeartButton = () => {
//   return (
//     <div>
//       <button>
//         <Heart className="h-[18px] w-auto text-secondary" />
//       </button>
//       <button>
//         <Heart className="h-[18px] w-auto fill-secondary text-secondary" />
//       </button>
//     </div>
//   )
// }

// export default HeartButton
