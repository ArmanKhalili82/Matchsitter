import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Define the button styles using `cva`
const buttonStyles = cva(
  "h-[31px] items-center justify-center rounded-full typo-mob-label", // Base styles
  {
    variants: {
      variant: {
        completed: "w-20 bg-success-success_light text-success",
        reserved: "w-[71px] bg-info-info_light text-info",
        canceled: "w-[71px] bg-error-success_light text-error",
      },
    },
    defaultVariants: {
      variant: "completed", // Default variant
    },
  }
);

// Define the props using `VariantProps`
interface PendingButtonProps extends VariantProps<typeof buttonStyles> {
  label: string;
}

const PendingButton = ({ variant, label }: PendingButtonProps) => {
  return <button className={buttonStyles({ variant })}>{label}</button>;
};

// const PendingButtons = () => {
//   return (
//     <div className="flex gap-2">
//       <PendingButton variant="completed" label="Completed" />
//       <PendingButton variant="reserved" label="Reserved" />
//       <PendingButton variant="canceled" label="Canceled" />
//     </div>
//   );
// };

export default PendingButton;



















// import React from 'react'

// const PendingButtons = () => {
//   return (
//     <div>
//       <button className="h-[31px] w-20 items-center justify-center rounded-full bg-success-success_light text-success typo-mob-label">
//         Completed
//       </button>
//       <button className="h-[31px] w-[71px] items-center justify-center rounded-full bg-info-info_light text-info typo-mob-label">
//         Reserved
//       </button>
//       <button className="h-[31px] w-[71px] items-center justify-center rounded-full bg-error-success_light text-error typo-mob-label">
//         Canceled
//       </button>
//     </div>
//   )
// }

// export default PendingButtons
