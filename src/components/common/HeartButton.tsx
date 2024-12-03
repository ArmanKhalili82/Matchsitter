import { Heart } from 'lucide-react'
import React from 'react'

const HeartButton = () => {
  return (
    <div>
      <button>
        <Heart className='text-secondary size-5' />
      </button>
      <button>
        <Heart className='size-5 fill-secondary text-secondary' />
      </button>
    </div>
  )
}

export default HeartButton
