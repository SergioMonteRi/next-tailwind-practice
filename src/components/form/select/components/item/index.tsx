'use client'

import { Check } from 'lucide-react'
import * as SelectRadix from '@radix-ui/react-select'

type SelectItemProps = SelectRadix.SelectItemProps & {
  text: string
}

export function Item({ text, ...props }: SelectItemProps) {
  return (
    <SelectRadix.Item
      className="flex cursor-pointer items-center justify-between gap-2 px-3 py-2.5 outline-none data-highlighted:bg-zinc-50"
      {...props}
    >
      <SelectRadix.ItemText>{text}</SelectRadix.ItemText>

      <SelectRadix.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500" />
      </SelectRadix.ItemIndicator>
    </SelectRadix.Item>
  )
}
