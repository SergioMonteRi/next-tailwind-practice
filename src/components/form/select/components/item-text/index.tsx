'use client'

import { twMerge } from 'tailwind-merge'
import * as SelectRadix from '@radix-ui/react-select'

type ItemTextProps = SelectRadix.SelectItemTextProps

export function ItemText({ children }: ItemTextProps) {
  return (
    <SelectRadix.ItemText asChild>
      <span className={twMerge('text-black', 'dark:text-zinc-100')}>
        {children}
      </span>
    </SelectRadix.ItemText>
  )
}
