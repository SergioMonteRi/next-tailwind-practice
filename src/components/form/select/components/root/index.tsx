'use client'

import * as SelectRadix from '@radix-ui/react-select'

interface RootProps extends SelectRadix.SelectProps {
  children: React.ReactNode
}

export function Root(props: RootProps) {
  return <SelectRadix.Root {...props} />
}
