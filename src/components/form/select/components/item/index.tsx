'use client'

import { Check } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { ComponentProps } from 'react'
import * as SelectRadix from '@radix-ui/react-select'

type SelectItemProps = ComponentProps<typeof SelectRadix.Item>

export function Item({ children, ...props }: SelectItemProps) {
  return (
    <SelectRadix.Item
      className={twMerge(
        'flex cursor-pointer items-center justify-between gap-2 px-3 py-2.5 outline-none data-highlighted:bg-zinc-50',
        'dark:data-highlighted:bg-zinc-700',
      )}
      {...props}
    >
      {children}

      <SelectRadix.ItemIndicator>
        <Check
          className={twMerge('h-4 w-4 text-violet-500', 'dark:text-violet-300')}
        />
      </SelectRadix.ItemIndicator>
    </SelectRadix.Item>
  )
}
