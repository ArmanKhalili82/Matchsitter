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

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3">
      Develop here
      <RadioButton />
      <PenButton />
      <Button variant="penButton" size="icon">
        <Pen />
      </Button>
      <Button variant={'default'} loading={true} size="lg">
        default
      </Button>
      <Button variant="default" size="icon" rounded="icon">
        <Play />
      </Button>
      <Button variant={'outline'} size="icon" rounded="icon">
        <EarIcon />
      </Button>
      <Button variant={'ghost'} size="sm">
        ghost
      </Button>
      <Button variant="textButton" size="lg">
        <ChevronLeft /> Button Text <ChevronRight />
      </Button>
      <Button>
        <Pen />
      </Button>
      <Checkbox />
      {/* <Toggle /> */}
      {/* <ToggleExpanding /> */}
      <RadioGroup>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
      </RadioGroup>
      <Switch />
      <Input
        color="success"
        suffixIcon={<div>Hello</div>}
        prefixIcon={<div>Good</div>}
        type="password"
      />
    </div>
  )
}

export default Page
