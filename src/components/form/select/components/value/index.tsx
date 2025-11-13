import * as SelectRadix from '@radix-ui/react-select'
import { ComponentProps } from 'react'

export type ValueProps = ComponentProps<typeof SelectRadix.Value>

export function Value({ children, ...props }: ValueProps) {
  if (!children) {
    return <SelectRadix.Value {...props} />
  }

  return (
    <SelectRadix.Value {...props}>
      <span className="flex items-center gap-2 text-black dark:text-zinc-100">
        {children}
      </span>
    </SelectRadix.Value>
  )
}
