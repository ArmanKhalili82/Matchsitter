"use client";
import React from "react";
import { RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

interface RadioOptionProps {
  id: string;
  value: string;
  label: string;
}

const RadioOption: React.FC<RadioOptionProps> = ({ id, value, label }) => {
  return (
    <div
      className="flex h-[42px] w-auto items-center gap-2 !rounded-100 bg-surface-100 p-2 text-textBody-300 ring-1 ring-border-200 focus-within:ring-primary"
      onBlur={(e) => {
        // Ensure focus returns if the user clicks outside
        if (e.relatedTarget === null) {
          e.target.focus();
        }
      }}
    >
      <RadioGroupItem
        value={value}
        id={id}
        className="h-4 w-4 rounded-full border border-border-200 focus:ring-1 focus:ring-primary"
      />
      <Label className="cursor-pointer" htmlFor={id}>
        {label}
      </Label>
    </div>
  );
};

export default RadioOption;
