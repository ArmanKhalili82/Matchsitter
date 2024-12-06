import React from 'react'
import HeartButton from './HeartButton'
import { Star, Verified } from 'lucide-react'
import PriceButton from './PriceButton'
import { Button } from '../ui/button'

const BabysitterCard = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex h-auto max-w-96 flex-col gap-4 !rounded-100 bg-background-50 p-3">
        <div className="flex h-14 justify-between">
          <div className="flex h-14 gap-2">
            <div className="h-14 w-14 !rounded-100 bg-background-400"></div>
            <div className="h-[47px]">
              <p className="pb-2 text-textBody-300 typo-mob-title-md">Alice Smith</p>
              <p className="text-textBody-200 typo-mob-body-sm">General Babysitter</p>
            </div>
          </div>
          <div>
            <HeartButton action="inactive" />
          </div>
        </div>

        <div className="flex h-auto flex-col gap-3">
          <div className="flex h-[30px] justify-between">
            <div className="flex h-6 gap-2">
              <button className="flex h-6 w-[44px] items-center justify-center gap-2 rounded-full bg-warning-warning_light p-1 text-warning-warning_dark typo-mob-title-sm">
                <Star className="size-4 fill-warning text-warning" /> 5
              </button>
              <button className="flex w-auto items-center justify-center text-primary typo-mob-body-sm">
                (12 Review)
              </button>
            </div>
            <div>
              <PriceButton />
            </div>
          </div>

          <div className="flex h-auto w-auto flex-wrap gap-2">
            <div className="flex h-auto w-auto items-center justify-center gap-2 rounded-[40px] bg-background-100 p-2 typo-mob-body-sm">
              <p className="text-textBody-200">Age:</p>
              <p className="text-textBody-300">29</p>
            </div>
            <div className="flex h-auto w-auto items-center justify-center gap-2 rounded-[40px] bg-background-100 p-2 typo-mob-body-sm">
              <p className="text-textBody-200">Experience:</p>
              <p className="text-textBody-300">2 Years</p>
            </div>
            <div className="flex h-auto w-auto items-center justify-center gap-2 rounded-[40px] bg-background-100 p-2 typo-mob-body-sm">
              <p className="text-textBody-200">Distance:</p>
              <p className="text-textBody-300">2.1 KM</p>
            </div>
          </div>
        </div>

        <div className="h-auto">
          <Button className="w-full" size="sm">
            Book Now
          </Button>
          <Button variant="ghost" className="w-full" size="sm">
            More Details
          </Button>
        </div>
      </div>

      <div className="flex h-auto max-w-72 flex-col gap-4 !rounded-100 bg-background-50 p-3">
        <div className="flex h-14 justify-between">
          <div className="flex h-14 gap-2">
            <div className="h-14 w-14 !rounded-100 bg-background-400"></div>
            <div className="h-[47px]">
              <p className="pb-2 text-textBody-300 typo-mob-title-md">Alice Smith</p>
              <p className="flex items-center justify-center gap-2 text-textBody-200 typo-mob-body-sm">
                {' '}
                <Verified className="size-3 text-success" /> Certified Babysitter
              </p>
            </div>
          </div>
          <div>
            <HeartButton action="inactive" />
          </div>
        </div>

        <div className="flex h-[110px] flex-col gap-3">
          <div className="flex h-[30px] justify-between">
            <div className="flex h-6 gap-2">
              <button className="flex h-6 w-[44px] items-center justify-center gap-2 rounded-full bg-warning-warning_light p-1 text-warning-warning_dark typo-mob-title-sm">
                <Star className="size-4 fill-warning text-warning" /> 5
              </button>
              <button className="flex w-auto items-center justify-center text-primary typo-mob-body-sm">
                (12 Review)
              </button>
            </div>
            <div>
              <PriceButton />
            </div>
          </div>

          <div className="flex h-auto w-auto flex-wrap gap-2">
            <div className="flex h-auto w-auto items-center justify-center gap-2 rounded-[40px] bg-background-100 p-2 typo-mob-body-sm">
              <p className="text-textBody-200">Age:</p>
              <p className="text-textBody-300">29</p>
            </div>
            <div className="flex h-auto w-auto items-center justify-center gap-2 rounded-[40px] bg-background-100 p-2 typo-mob-body-sm">
              <p className="text-textBody-200">Experience:</p>
              <p className="text-textBody-300">2 Years</p>
            </div>
            <div className="flex h-auto w-auto items-center justify-center gap-2 rounded-[40px] bg-background-100 p-2 typo-mob-body-sm">
              <p className="text-textBody-200">Distance:</p>
              <p className="text-textBody-300">2.1 KM</p>
            </div>
          </div>
        </div>

        <div className="h-auto">
          <Button className="w-full" size="sm">
            Book Now
          </Button>
          <Button variant="ghost" className="w-full" size="sm">
            More Details
          </Button>
        </div>
      </div>

      <div className="flex h-auto max-w-64 flex-col gap-4 !rounded-100 bg-background-50 p-3">
        <div className="flex h-14 justify-between">
          <div className="flex h-14 gap-2">
            <div className="h-14 w-14 !rounded-100 bg-background-400"></div>
            <div className="h-[47px]">
              <p className="pb-2 text-textBody-300 typo-mob-title-md">Alice Smith</p>
              <p className="flex items-center justify-center gap-2 text-textBody-200 typo-mob-body-sm">
                {' '}
                <Verified className="size-3 text-success" /> Certified Babysitter
              </p>
            </div>
          </div>
          <div>
            <HeartButton action="inactive" />
          </div>
        </div>

        <div className="flex h-[110px] flex-col gap-3">
          <div className="flex h-[30px] justify-between">
            <div className="flex h-6 gap-2">
              <button className="flex h-6 w-[44px] items-center justify-center gap-2 rounded-full bg-warning-warning_light p-1 text-warning-warning_dark typo-mob-title-sm">
                <Star className="size-4 fill-warning text-warning" /> 5
              </button>
              <button className="flex w-auto items-center justify-center text-primary typo-mob-body-sm">
                (12 Review)
              </button>
            </div>
            <div>
              <PriceButton />
            </div>
          </div>

          <div className="flex h-auto w-auto flex-wrap gap-2">
            <div className="flex h-auto w-auto items-center justify-center gap-2 rounded-[40px] bg-background-100 p-2 typo-mob-body-sm">
              <p className="text-textBody-200">Age:</p>
              <p className="text-textBody-300">29</p>
            </div>
            <div className="flex h-auto w-auto items-center justify-center gap-2 rounded-[40px] bg-background-100 p-2 typo-mob-body-sm">
              <p className="text-textBody-200">Experience:</p>
              <p className="text-textBody-300">2 Years</p>
            </div>
            <div className="flex h-auto w-auto items-center justify-center gap-2 rounded-[40px] bg-background-100 p-2 typo-mob-body-sm">
              <p className="text-textBody-200">Distance:</p>
              <p className="text-textBody-300">2.1 KM</p>
            </div>
          </div>
        </div>

        <div className="h-auto">
          <Button className="w-full" size="sm">
            Book Now
          </Button>
          <Button variant="ghost" className="w-full" size="sm">
            More Details
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BabysitterCard
