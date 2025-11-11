'use client'

import { ChevronDown } from 'lucide-react'
import * as SelectRadix from '@radix-ui/react-select'

interface RootProps extends SelectRadix.SelectProps {
  placeholder: string
  children: React.ReactNode
}

export function Root({ placeholder, children, ...props }: RootProps) {
  return (
    <SelectRadix.Root {...props}>
      <SelectRadix.Trigger className="flex h-11 w-full cursor-pointer items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-placeholder:text-zinc-600">
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
          className="z-10 w-(--radix-select-trigger-width) overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm"
        >
          <SelectRadix.Viewport className="w-full text-black">
            {children}
          </SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  )
}
