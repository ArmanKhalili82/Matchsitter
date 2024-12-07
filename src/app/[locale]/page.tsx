import Toggle from '@/components/common/Toggle'
import ToggleExpanding from '@/components/common/ToggleExpanding'
import { Button } from '@/components/ui/button'
import Input from '@/components/ui/input'
import React from 'react'
import { EarIcon, Fan, Play, ChevronLeft, ChevronRight, Pen } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import RadioButton from '@/components/common/RadioButton'
import PenButton from '@/components/common/PenButton'
import PriceButton from '@/components/common/PriceButton'
import LabelSkill from '@/components/common/LabelSkill'
import Menu from '@/components/common/Menu'
import HeartButton from '@/components/common/HeartButton'
import SpinnerButton from '@/components/common/SpinnerButton'
import PendingButton from '@/components/common/PendingButtons'
import BabysitterCard from '@/components/common/BabysitterCard'
import { Link, type PathnamesType } from '@/i18n/routing'

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="mt-6 h-7 w-[130px] bg-primary"></div>
      <p className="mt-[267px] text-textBody-400 typo-desk-title-md">Choose your role</p>
      <Link href={'/authorization/signin?as=parent' as PathnamesType}>
        <Button size="md" className="mt-[23px] w-[328px]">
          Parent
        </Button>
      </Link>
      {/* <Button className="mt-[23px] w-[328px]" size="md">
        <Link href={'/authorization/signin?as=parent' as PathnamesType}>Parent</Link> */}
      {/* get search params in next pages */}
      {/* </Button> */}
      {/* <Button className='w-[328px] mt-[15px]' variant={'outline'} size='md'>
        <Link href="/authorization/babysitter/signin">Babysitter</Link>
      </Button> */}
      <Link href={'/authorization/signin?as=babysitter' as PathnamesType}>
        <Button variant={'outline'} size="md" className="mt-[23px] w-[328px]">
          Babysitter
        </Button>
      </Link>
    </div>
    // <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-gray-200">
    //   Develop here
    //   <BabysitterCard />
    //   <SpinnerButton />
    //   <Menu />
    //   <HeartButton action="active" />
    //   <HeartButton action="inactive" />
    //   <div className="flex flex-col ring-2 ring-orange-300">
    //     <PendingButton variant="completed" label="completed" />
    //     <PendingButton variant="reserved" label="reserved" />
    //     <PendingButton variant="canceled" label="canceled" />
    //   </div>
    //   <LabelSkill />
    //   <PriceButton />
    //   <RadioButton />
    //   <PenButton />
    //   <Button variant="penButton" size="icon">
    //     <Pen />
    //   </Button>
    //   <Button variant={'default'} loading={true} size="lg">
    //     default
    //   </Button>
    //   <Button variant="default" size="icon" rounded="icon">
    //     <Play />
    //   </Button>
    //   <Button variant={'outline'} size="icon" rounded="icon">
    //     <EarIcon />
    //   </Button>
    //   <Button variant={'ghost'} size="sm">
    //     ghost
    //   </Button>
    //   <Button variant="textButton" size="lg">
    //     <ChevronLeft /> Button Text <ChevronRight />
    //   </Button>
    //   <Button>
    //     <Pen />
    //   </Button>
    //   <Checkbox />
    //   <Toggle />
    //   <ToggleExpanding />
    //   <RadioGroup>
    //     <div className="flex items-center space-x-2">
    //       <RadioGroupItem value="default" id="r1" />
    //       <Label htmlFor="r1">Default</Label>
    //     </div>
    //     <div className="flex items-center space-x-2">
    //       <RadioGroupItem value="comfortable" id="r2" />
    //       <Label htmlFor="r2">Comfortable</Label>
    //     </div>
    //   </RadioGroup>
    //   <Switch />
    //   <Input
    //     color="success"
    //     suffixIcon={<div>Hello</div>}
    //     prefixIcon={<div>Good</div>}
    //     type="password"
    //   />
    // </div>
  )
}

export default Page
