import { CalendarCheck, CalendarDays, Home, Settings, User } from 'lucide-react'

import React from 'react'

const Menu = () => {
  return (
    <div className='flex h-[72px] w-[360px] bg-background-50 rounded-t-150 justify-between items-center text-icons-600 p-8'>
      <div className='text-primary'><Home className='pl-1' /> <p className='typo-mob-title-sm py-1'>Home</p> </div> <CalendarCheck className='size-6' /> <CalendarDays className='size-6' /> <Settings className='size-6' /> <User className='size-6' />
    </div>
  )
}

export default Menu
