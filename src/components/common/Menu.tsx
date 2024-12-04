import { CalendarCheck, CalendarDays, Home, Settings, User } from 'lucide-react'

import React from 'react'

const Menu = () => {
  return (
    <div className="flex h-[72px] w-[360px] items-center justify-between rounded-t-150 bg-background-50 p-8 text-icons-600">
      <div className="flex flex-col justify-center items-center text-primary">
        <Home /> <p className="py-1 typo-mob-title-sm">Home</p>
      </div>
      <CalendarCheck className="size-6" /> <CalendarDays className="size-6" />
      <Settings className="size-6" /> <User className="size-6" />
    </div>
  )
}

export default Menu
