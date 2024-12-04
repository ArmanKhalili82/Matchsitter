import React from 'react'
import HeartButton from './HeartButton'
import { Star } from 'lucide-react'
import PriceButton from './PriceButton'
import { Button } from '../ui/button'

const BabysitterCard = () => {
  return (
    <div>
      <div className='h-[306px] w-[328px] p-3 bg-background-50 !rounded-100'>
        <div className='flex h-14 justify-between pb-4'>
            <div className='flex h-14 gap-2'>
                <div className='h-14 w-14 !rounded-100 bg-background-400'></div>
                <div className='h-[47px]'>
                    <p className='text-textBody-300 typo-mob-title-md pb-2'>Alice Smith</p>
                    <p className='text-textBody-200 typo-mob-body-sm'>General Babysitter</p>
                </div>
            </div>
            <div>
                <HeartButton action='inactive' />
            </div>
        </div>

        <div className='h-[110px] py-4'>
            <div className='flex h-[30px] justify-between pb-3'>
                <div className='flex h-6 gap-2'>
                    <button className='flex h-6 w-[44px] rounded-full justify-center items-center gap-2 p-1 bg-warning-warning_light text-warning-warning_dark typo-mob-title-sm'>
                        <Star className='size-4 text-warning fill-warning' />  5
                    </button>
                    <button className='flex w-auto items-center justify-center text-primary typo-mob-body-sm'>
                        (12 Review)
                    </button>
                </div>
                <div>
                    <PriceButton />
                </div>
            </div>

            <div className='flex h-[68px] w-auto gap-2 flex-wrap pt-3'>
                <div className='flex h-[30px] w-auto p-2 bg-background-100 rounded-[40px] justify-center items-center gap-2 typo-mob-body-sm'>
                    <p className='text-textBody-200'>Age:</p>
                    <p className='text-textBody-300'>29</p>
                </div>
                <div className='flex h-[30px] w-auto p-2 bg-background-100 rounded-[40px] justify-center items-center gap-2 typo-mob-body-sm'>
                    <p className='text-textBody-200'>Experience:</p>
                    <p className='text-textBody-300'>2 Years</p>
                </div>
                <div className='flex h-[30px] w-auto p-2 bg-background-100 rounded-[40px] justify-center items-center gap-2 typo-mob-body-sm'>
                    <p className='text-textBody-200'>Distance:</p>
                    <p className='text-textBody-300'>2.1 KM</p>
                </div>
            </div>
        </div>

        <div className='h-[84px] pt-5'>
            <Button className='h-[40px] w-full'>
                Book Now
            </Button>
            <Button variant='ghost' className='h-[40px] w-full'>
                More Details
            </Button>
        </div>
      </div>
    </div>
  )
}

export default BabysitterCard
