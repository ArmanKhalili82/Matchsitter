"use client";
import React from "react";
import { RadioGroup } from "../ui/radio-group";
import RadioItem from './RadioItem';

const RadioButtonGroup = () => {
  return (
    <div>
      <RadioGroup>
        <RadioItem id="r1" value="Yes" label="Yes" />
        <RadioItem id="r2" value="No" label="No" />
      </RadioGroup>
    </div>
  );
};

export default RadioButtonGroup;




















// "use client"
// import React from 'react'
// import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
// import { Label } from '../ui/label'

// const RadioButton = () => {
//   return (
//     <div>
//       <RadioGroup>
//         <div 
//           className="flex h-[42px] w-auto items-center gap-2 !rounded-100 bg-surface-100 p-2 text-textBody-300 ring-1 ring-border-200 focus-within:ring-primary"
//           onBlur={e => {
//             // only re-focus if the user clicked on something
//             // that was NOT an input element
//             if (e.relatedTarget === null) {
//                 e.target.focus();
//             }
//         }}
//         >
//           <RadioGroupItem
//             value="Yes"
//             id="r1"
//             className="h-4 w-4 rounded-full border border-border-200 focus:ring-1 focus:ring-primary"
//           />
//           <Label className="cursor-pointer" htmlFor="r1">
//             Yes
//           </Label>
//         </div>
//         <div 
//           className="flex h-[42px] w-auto items-center gap-2 !rounded-100 bg-surface-100 p-2 text-textBody-300 ring-1 ring-border-200 focus-within:ring-primary"
//           onBlur={e => {
//             // only re-focus if the user clicked on something
//             // that was NOT an input element
//             if (e.relatedTarget === null) {
//                 e.target.focus();
//             }
//         }}
//         >
//           <RadioGroupItem
//             value="No"
//             id="r2"
//             className="h-4 w-4 rounded-full border border-border-200 focus:ring-1 focus:ring-primary"
//           />
//           <Label className="cursor-pointer" htmlFor="r2">
//             No
//           </Label>
//         </div>
//         {/* <div className="flex h-[42px] w-[68px] gap-2 !rounded-100 bg-surface-100 p-2 text-textBody-300 ring-1 ring-border-200 typo-mob-body-lg focus:ring-primary">
//           <RadioGroupItem value="No" id="r2" />
//           <Label className='py-1' htmlFor="r2">No</Label>
//         </div> */}
//       </RadioGroup>
//     </div>
//   )
// }

// export default RadioButton
