'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'

import { useFileInput } from '../root'
import { FileItem } from '../file-item'

export function FileList() {
  const { files } = useFileInput()

  const [parent] = useAutoAnimate()

  return (
    <div className="mt-4 space-y-3" ref={parent}>
      {files.map((file) => (
        <FileItem
          key={file.name}
          name={file.name}
          size={file.size}
          state="error"
        />
      ))}
    </div>
  )
}
