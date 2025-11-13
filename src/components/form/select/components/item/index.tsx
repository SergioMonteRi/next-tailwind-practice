'use client'

import { Check } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import * as SelectRadix from '@radix-ui/react-select'

type SelectItemProps = SelectRadix.SelectItemProps & {
  text: string
}

export function Item({ text, ...props }: SelectItemProps) {
  return (
    <SelectRadix.Item
      className={twMerge(
        'flex cursor-pointer items-center justify-between gap-2 px-3 py-2.5 outline-none data-highlighted:bg-zinc-50',
        'dark:data-highlighted:bg-zinc-700',
      )}
      {...props}
    >
      <SelectRadix.ItemText asChild>
        <span className={twMerge('text-black', 'dark:text-zinc-100')}>
          {text}
        </span>
      </SelectRadix.ItemText>

      <SelectRadix.ItemIndicator>
        <Check
          className={twMerge('h-4 w-4 text-violet-500', 'dark:text-violet-300')}
        />
      </SelectRadix.ItemIndicator>
    </SelectRadix.Item>
  )
}
