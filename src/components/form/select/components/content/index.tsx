'use client'

import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import * as SelectRadix from '@radix-ui/react-select'
import * as ScrollAreaRadix from '@radix-ui/react-scroll-area'

export type ContentProps = ComponentProps<typeof SelectRadix.Content>

export function Content({ children, ...props }: ContentProps) {
  return (
    <SelectRadix.Portal>
      <SelectRadix.Content
        {...props}
        side="bottom"
        position="popper"
        sideOffset={8}
        className={twMerge(
          'animate-slide-down-and-fade z-10 w-(--radix-select-trigger-width) rounded-lg border border-zinc-200 bg-white shadow-sm',
          'dark:border-zinc-700 dark:bg-zinc-800',
        )}
      >
        <ScrollAreaRadix.Root className="h-full w-full" type="auto">
          <SelectRadix.Viewport
            className="max-h-[300px]"
            style={{ overflowY: undefined }}
            asChild
          >
            <ScrollAreaRadix.Viewport className="h-full w-full overflow-y-scroll">
              {children}
            </ScrollAreaRadix.Viewport>
          </SelectRadix.Viewport>

          <ScrollAreaRadix.Scrollbar
            className="invisible flex w-2.5 touch-none bg-zinc-100 p-0.5 select-none group-hover:visible dark:bg-zinc-700"
            orientation="vertical"
          >
            <ScrollAreaRadix.Thumb className="relative flex-1 rounded-lg bg-zinc-300 before:absolute before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] dark:bg-zinc-500" />
          </ScrollAreaRadix.Scrollbar>
        </ScrollAreaRadix.Root>
      </SelectRadix.Content>
    </SelectRadix.Portal>
  )
}
