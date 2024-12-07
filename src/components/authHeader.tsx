'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation' // Correct import for App Router

export default function AuthHeader() {
  const router = useRouter() // App Router's useRouter
  

  return (
    <div>
      <div className='flex justify-between'>
      <button
        onClick={() => router.back()}
        className="mx-4 flex size-9 items-center justify-center !rounded-100 bg-background-200"
      >
        <ArrowLeft className="size-3 text-icons-800" />
      </button>
      <div className="mt-6 h-7 w-[130px] bg-primary"></div>
    </div>
    </div>
  )
}
