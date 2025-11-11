'use client'

import { Check, ChevronDown } from 'lucide-react'
import * as SelectRadix from '@radix-ui/react-select'

export function Select() {
  return (
    <SelectRadix.Root>
      <SelectRadix.Trigger className="flex h-11 w-full cursor-pointer items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-placeholder:text-zinc-600">
        <SelectRadix.Value
          className="text-black"
          placeholder="Select a country..."
        />
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
            <SelectRadix.Item
              value="united-states"
              className="flex cursor-pointer items-center justify-between gap-2 px-3 py-2.5 outline-none data-highlighted:bg-zinc-50"
            >
              <SelectRadix.ItemText>United States</SelectRadix.ItemText>

              <SelectRadix.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </SelectRadix.ItemIndicator>
            </SelectRadix.Item>

            <SelectRadix.Item
              value="brazil"
              className="flex cursor-pointer items-center justify-between gap-2 px-3 py-2.5 outline-none data-highlighted:bg-zinc-50"
            >
              <SelectRadix.ItemText>Brazil</SelectRadix.ItemText>

              <SelectRadix.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </SelectRadix.ItemIndicator>
            </SelectRadix.Item>
          </SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  )
}
