import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/sergiomonteri.png"
        alt="Profile"
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Sergio Monteri
        </span>
        <span className="truncate text-xs text-zinc-500">
          sergio@monteri.com
        </span>
      </div>

      <button
        type="button"
        className="ml-auto cursor-pointer rounded-md p-2 hover:bg-zinc-50"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
