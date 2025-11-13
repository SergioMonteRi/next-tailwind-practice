import { LogOut } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import { Button } from '@/components'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        alt="Profile"
        src="https://github.com/sergiomonteri.png"
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-1 flex-col truncate">
        <span
          className={twMerge(
            'text-sm font-semibold text-zinc-700',
            'dark:text-zinc-100',
          )}
        >
          Sergio Monteri
        </span>
        <span
          className={twMerge(
            'truncate text-xs text-zinc-500',
            'dark:text-zinc-400',
          )}
        >
          sergio@monteri.com
        </span>
      </div>

      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5" />
      </Button>
    </div>
  )
}
