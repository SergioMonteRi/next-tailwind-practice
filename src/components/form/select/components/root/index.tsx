'use client'

import { ChevronDown } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import * as SelectRadix from '@radix-ui/react-select'

interface RootProps extends SelectRadix.SelectProps {
  placeholder: string
  children: React.ReactNode
}

export function Root({ placeholder, children, ...props }: RootProps) {
  return (
    <SelectRadix.Root {...props}>
      <SelectRadix.Trigger
        className={twMerge(
          'flex h-11 w-full cursor-pointer items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none data-placeholder:text-zinc-600',
          'focus:border-violet-300 focus:ring-4 focus:ring-violet-100',
          'data-placeholder:text-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400 dark:focus:border-violet-500 dark:focus:ring-violet-500/20',
        )}
      >
        <SelectRadix.Value className="text-black" placeholder={placeholder} />
        <SelectRadix.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectRadix.Icon>
      </SelectRadix.Trigger>

      <SelectRadix.Portal>
        <SelectRadix.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className={twMerge(
            'animate-slide-down-and-fade z-10 w-(--radix-select-trigger-width) overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm',
            'dark:border-zinc-700 dark:bg-zinc-800',
          )}
        >
          <SelectRadix.Viewport className="w-full text-black">
            {children}
          </SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  )
}
