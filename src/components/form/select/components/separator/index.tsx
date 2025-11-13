'use client'

import { ComponentProps } from 'react'
import * as Select from '@radix-ui/react-select'

type SeparatorProps = ComponentProps<typeof Select.Separator>

export function Separator(props: SeparatorProps) {
  return <Select.Separator {...props} />
}
