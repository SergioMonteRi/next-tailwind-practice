'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type RootProps = ComponentProps<'div'>

type FileInputContextType = {
  id: string
  files: File[]
  onRemoveFile: (fileName: string) => void
  onFilesSelected: (selectedFiles: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onRemoveFile(fileName: string) {
    setFiles((state) => state.filter((file) => file.name !== fileName))
  }

  function onFilesSelected(selectedFiles: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => {
        const key = (f: File) => `${f.name}-${f.size}-${f.lastModified}`

        const existing = new Set(state.map(key))

        const uniqueNewFiles = selectedFiles.filter(
          (f) => !existing.has(key(f)),
        )

        return uniqueNewFiles.length > 0 ? [...state, ...uniqueNewFiles] : state
      })
    } else {
      setFiles(selectedFiles.length > 0 ? [selectedFiles[0]] : [])
    }
  }

  return (
    <FileInputContext.Provider
      value={{ id, files, onRemoveFile, onFilesSelected }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => {
  return useContext(FileInputContext)
}
