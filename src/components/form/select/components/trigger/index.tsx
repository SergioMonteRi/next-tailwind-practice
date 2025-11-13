'use client'

import { twMerge } from 'tailwind-merge'
import { ComponentProps } from 'react'
import { ChevronDown } from 'lucide-react'
import * as SelectRadix from '@radix-ui/react-select'

export type TriggerProps = ComponentProps<typeof SelectRadix.Trigger>

export function Trigger({ children, ...props }: TriggerProps) {
  return (
    <SelectRadix.Trigger
      {...props}
      className={twMerge(
        'flex h-11 w-full cursor-pointer items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none data-placeholder:text-zinc-600',
        'focus:border-violet-300 focus:ring-4 focus:ring-violet-100',
        'data-placeholder:text-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400 dark:focus:border-violet-500 dark:focus:ring-violet-500/20',
      )}
    >
      {children}

      <SelectRadix.Icon>
        <ChevronDown className="h-5 w-5 text-zinc-500" />
      </SelectRadix.Icon>
    </SelectRadix.Trigger>
  )
}
