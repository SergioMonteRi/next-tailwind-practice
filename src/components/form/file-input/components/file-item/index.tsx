import { tv, VariantProps } from 'tailwind-variants'
import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import { Button } from '@/components'
import { formatBytes } from '@/utils'

import { useFileInput } from '../root'

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: twMerge(
      'rounded-full border-4 border-violet-100 bg-violet-200 text-violet-600 p-2',
      'dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500',
    ),
    deleteButton: '',
  },

  variants: {
    state: {
      progress: {
        container: 'dark:border-zinc-700',
      },
      complete: {
        container: twMerge('border-violet-500', 'dark:border-violet-300/30'),
      },
      error: {
        container: twMerge(
          'border-error-300 bg-error-25',
          'dark:bg-error-500/5 dark:border-error-500/30',
        ),
        icon: twMerge(
          'border-error-50 bg-error-100 text-error-600',
          'dark:border-error-500/30 dark:bg-error-500/5 dark:text-error-400',
        ),
        deleteButton: twMerge(
          'text-error-700 hover:text-error-900 hover:bg-error-100',
          'dark:text-error-400 dark:hover:text-error-300 dark:hover:bg-error-500/5',
        ),
      },
    },
  },

  defaultVariants: {
    state: 'progress',
  },
})

interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
}

export function FileItem({ name, size, state }: FileItemProps) {
  const { onRemoveFile } = useFileInput()

  const { container, icon, deleteButton } = fileItem({ state })

  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span
              className={twMerge(
                'text-error-700 text-sm font-medium',
                'dark:text-error-400',
              )}
            >
              Upload failed, please try again.
            </span>
            <span
              className={twMerge(
                'text-error-600 text-sm',
                'dark:text-error-500',
              )}
            >
              {name}
            </span>
          </div>

          <button
            type="button"
            className={twMerge(
              'cursor-pointer text-sm font-semibold text-red-700 hover:text-red-900',
              'dark:hover:text-error-300 dark:text-red-400',
            )}
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span
              className={twMerge(
                'text-sm font-medium text-zinc-700',
                'dark:text-zinc-100',
              )}
            >
              {name}
            </span>
            <span
              className={twMerge('text-sm text-zinc-500', 'dark:text-zinc-400')}
            >
              {formatBytes(size)}
            </span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div
              className={twMerge(
                'h-2 flex-1 rounded-full bg-zinc-100',
                'dark:bg-zinc-600',
              )}
            >
              <div
                className={twMerge(
                  'h-2 rounded-full bg-zinc-100',
                  'dark:bg-violet-400',
                )}
                style={{ width: state === 'complete' ? '100%' : '80%' }}
              />
            </div>
            <span
              className={twMerge(
                'text-sm font-medium text-zinc-700',
                'dark:text-zinc-300',
              )}
            >
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
      ) : (
        <Button
          type="button"
          variant="ghost"
          className={deleteButton()}
          onClick={() => onRemoveFile(name)}
        >
          <Trash2 className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
